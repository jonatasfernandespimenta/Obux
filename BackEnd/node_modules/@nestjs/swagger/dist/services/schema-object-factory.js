"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaObjectFactory = void 0;
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const helpers_1 = require("../decorators/helpers");
const api_extra_models_explorer_1 = require("../explorers/api-extra-models.explorer");
const utils_1 = require("../utils");
const enum_utils_1 = require("../utils/enum.utils");
const is_body_parameter_util_1 = require("../utils/is-body-parameter.util");
const is_built_in_type_util_1 = require("../utils/is-built-in-type.util");
const is_date_ctor_util_1 = require("../utils/is-date-ctor.util");
class SchemaObjectFactory {
    constructor(modelPropertiesAccessor, swaggerTypesMapper) {
        this.modelPropertiesAccessor = modelPropertiesAccessor;
        this.swaggerTypesMapper = swaggerTypesMapper;
    }
    createFromModel(parameters, schemas, schemaRefsStack = []) {
        const parameterObjects = parameters.map((param) => {
            if (this.isLazyTypeFunc(param.type)) {
                [param.type, param.isArray] = helpers_1.getTypeIsArrayTuple(param.type(), undefined);
            }
            if (this.isPrimitiveType(param.type)) {
                return param;
            }
            if (this.isArrayCtor(param.type)) {
                return this.mapArrayCtorParam(param);
            }
            if (!is_body_parameter_util_1.isBodyParameter(param)) {
                return this.createQueryOrParamSchema(param, schemas, schemaRefsStack);
            }
            const modelName = this.exploreModelSchema(param.type, schemas, schemaRefsStack);
            const name = param.name || modelName;
            const schema = Object.assign(Object.assign({}, (param.schema || {})), { $ref: utils_1.getSchemaPath(modelName) });
            const isArray = param.isArray;
            param = lodash_1.omit(param, 'isArray');
            if (isArray) {
                return Object.assign(Object.assign({}, param), { name, schema: {
                        type: 'array',
                        items: schema
                    } });
            }
            return Object.assign(Object.assign({}, param), { name,
                schema });
        });
        return lodash_1.flatten(parameterObjects);
    }
    createQueryOrParamSchema(param, schemas, schemaRefsStack) {
        if (param.enumName) {
            return this.createEnumParam(param, schemas, schemaRefsStack);
        }
        if (is_date_ctor_util_1.isDateCtor(param.type)) {
            return Object.assign(Object.assign({ format: 'date-time' }, param), { type: 'string' });
        }
        if (lodash_1.isFunction(param.type)) {
            const propertiesWithType = this.extractPropertiesFromType(param.type, schemas, schemaRefsStack);
            if (!propertiesWithType) {
                return param;
            }
            return propertiesWithType.map((property) => {
                var _a;
                const parameterObject = Object.assign(Object.assign({}, lodash_1.omit(property, 'enumName')), { in: 'query', required: (_a = property.required) !== null && _a !== void 0 ? _a : true });
                return parameterObject;
            });
        }
        return param;
    }
    extractPropertiesFromType(type, schemas, schemaRefsStack) {
        const { prototype } = type;
        if (!prototype) {
            return;
        }
        const extraModels = api_extra_models_explorer_1.exploreGlobalApiExtraModelsMetadata(type);
        extraModels.forEach((item) => this.exploreModelSchema(item, schemas, schemaRefsStack));
        this.modelPropertiesAccessor.applyMetadataFactory(prototype);
        const modelProperties = this.modelPropertiesAccessor.getModelProperties(prototype);
        const propertiesWithType = modelProperties.map((key) => {
            const property = this.mergePropertyWithMetadata(key, prototype, schemas, schemaRefsStack);
            const schemaCombinators = ['oneOf', 'anyOf', 'allOf'];
            if (schemaCombinators.some((key) => key in property)) {
                delete property.type;
            }
            return property;
        });
        return propertiesWithType;
    }
    exploreModelSchema(type, schemas, schemaRefsStack = []) {
        if (this.isLazyTypeFunc(type)) {
            type = type();
        }
        const propertiesWithType = this.extractPropertiesFromType(type, schemas, schemaRefsStack);
        if (!propertiesWithType) {
            return '';
        }
        const typeDefinition = {
            type: 'object',
            properties: lodash_1.mapValues(lodash_1.keyBy(propertiesWithType, 'name'), (property) => lodash_1.omit(property, ['name', 'isArray', 'required', 'enumName']))
        };
        const typeDefinitionRequiredFields = propertiesWithType
            .filter((property) => property.required != false)
            .map((property) => property.name);
        if (typeDefinitionRequiredFields.length > 0) {
            typeDefinition['required'] = typeDefinitionRequiredFields;
        }
        schemas.push({
            [type.name]: typeDefinition
        });
        return type.name;
    }
    mergePropertyWithMetadata(key, prototype, schemas, schemaRefsStack = [], metadata) {
        if (!metadata) {
            metadata =
                Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||
                    {};
        }
        if (this.isLazyTypeFunc(metadata.type)) {
            metadata.type = metadata.type();
            [metadata.type, metadata.isArray] = helpers_1.getTypeIsArrayTuple(metadata.type, metadata.isArray);
        }
        if (this.isObjectLiteral(metadata.type)) {
            return this.createFromObjectLiteral(key, metadata.type, schemas, schemaRefsStack);
        }
        if (lodash_1.isString(metadata.type)) {
            if (enum_utils_1.isEnumMetadata(metadata)) {
                return this.createEnumSchemaType(key, metadata, schemas, schemaRefsStack);
            }
            if (metadata.isArray) {
                return this.transformToArraySchemaProperty(metadata, key, metadata.type);
            }
            return Object.assign(Object.assign({}, metadata), { name: metadata.name || key });
        }
        if (is_date_ctor_util_1.isDateCtor(metadata.type)) {
            if (metadata.isArray) {
                return this.transformToArraySchemaProperty(metadata, key, {
                    format: metadata.format || 'date-time',
                    type: 'string'
                });
            }
            return Object.assign(Object.assign({ format: 'date-time' }, metadata), { type: 'string', name: metadata.name || key });
        }
        if (!is_built_in_type_util_1.isBuiltInType(metadata.type)) {
            return this.createNotBuiltInTypeReference(key, metadata, schemas, schemaRefsStack);
        }
        const typeName = this.getTypeName(metadata.type);
        const itemType = this.swaggerTypesMapper.mapTypeToOpenAPIType(typeName);
        if (metadata.isArray) {
            return this.transformToArraySchemaProperty(metadata, key, {
                type: itemType
            });
        }
        else if (itemType === 'array') {
            const defaultOnArray = 'string';
            return this.transformToArraySchemaProperty(metadata, key, {
                type: defaultOnArray
            });
        }
        return Object.assign(Object.assign({}, metadata), { name: metadata.name || key, type: itemType });
    }
    createEnumParam(param, schemas, schemaRefsStack) {
        var _a;
        const enumName = param.enumName;
        const $ref = utils_1.getSchemaPath(enumName);
        if (!lodash_1.includes(schemaRefsStack, enumName)) {
            schemaRefsStack.push(enumName);
            const _enum = param.enum
                ? param.enum
                : param.schema['items']
                    ? param.schema['items']['enum']
                    : param.schema['enum'];
            schemas.push({
                [enumName]: {
                    type: 'string',
                    enum: _enum
                }
            });
        }
        param.schema =
            param.isArray || ((_a = param.schema) === null || _a === void 0 ? void 0 : _a['items'])
                ? { type: 'array', items: { $ref } }
                : { $ref };
        return lodash_1.omit(param, ['isArray', 'items', 'enumName', 'enum']);
    }
    createEnumSchemaType(key, metadata, schemas, schemaRefsStack) {
        if (!metadata.enumName) {
            return Object.assign(Object.assign({}, metadata), { name: metadata.name || key });
        }
        const enumName = metadata.enumName;
        const $ref = utils_1.getSchemaPath(enumName);
        if (!lodash_1.includes(schemaRefsStack, enumName)) {
            schemaRefsStack.push(enumName);
            schemas.push({
                [enumName]: {
                    type: 'string',
                    enum: metadata.isArray && metadata.items
                        ? metadata.items['enum']
                        : metadata.enum
                }
            });
        }
        const _schemaObject = Object.assign(Object.assign({}, metadata), { name: metadata.name || key, type: metadata.isArray ? 'array' : 'string' });
        const refHost = metadata.isArray ? { items: { $ref } } : { $ref };
        const paramObject = Object.assign(Object.assign({}, _schemaObject), refHost);
        const pathsToOmit = ['enum', 'enumName'];
        if (!metadata.isArray) {
            pathsToOmit.push('type');
        }
        return lodash_1.omit(paramObject, pathsToOmit);
    }
    createNotBuiltInTypeReference(key, metadata, schemas, schemaRefsStack) {
        if (shared_utils_1.isUndefined(metadata.type)) {
            throw new Error(`A circular dependency has been detected (property key: "${key}"). Please, make sure that each side of a bidirectional relationships are using lazy resolvers ("type: () => ClassType").`);
        }
        let schemaObjectName = metadata.type.name;
        if (!lodash_1.includes(schemaRefsStack, schemaObjectName)) {
            schemaRefsStack.push(schemaObjectName);
            schemaObjectName = this.exploreModelSchema(metadata.type, schemas, schemaRefsStack);
        }
        const $ref = utils_1.getSchemaPath(schemaObjectName);
        if (metadata.isArray) {
            return this.transformToArraySchemaProperty(metadata, key, { $ref });
        }
        const keysToRemove = ['type', 'isArray', 'required'];
        const validMetadataObject = lodash_1.omit(metadata, keysToRemove);
        const extraMetadataKeys = Object.keys(validMetadataObject);
        if (extraMetadataKeys.length > 0) {
            return Object.assign(Object.assign({ name: metadata.name || key, required: metadata.required }, validMetadataObject), { allOf: [{ $ref }] });
        }
        return {
            name: metadata.name || key,
            required: metadata.required,
            $ref
        };
    }
    transformToArraySchemaProperty(metadata, key, type) {
        const keysToRemove = ['type', 'enum'];
        const schemaHost = Object.assign(Object.assign({}, lodash_1.omit(metadata, keysToRemove)), { name: metadata.name || key, type: 'array', items: lodash_1.isString(type)
                ? {
                    type
                }
                : Object.assign({}, type) });
        schemaHost.items = lodash_1.omitBy(schemaHost.items, shared_utils_1.isUndefined);
        return schemaHost;
    }
    mapArrayCtorParam(param) {
        return Object.assign(Object.assign({}, lodash_1.omit(param, 'type')), { schema: {
                type: 'array',
                items: {
                    type: 'string'
                }
            } });
    }
    createFromObjectLiteral(key, literalObj, schemas, schemaRefsStack = []) {
        const objLiteralKeys = Object.keys(literalObj);
        const properties = {};
        objLiteralKeys.forEach((key) => {
            const propertyCompilerMetadata = literalObj[key];
            if (enum_utils_1.isEnumArray(propertyCompilerMetadata)) {
                propertyCompilerMetadata.type = 'array';
                const enumValues = enum_utils_1.getEnumValues(propertyCompilerMetadata.enum);
                propertyCompilerMetadata.items = {
                    type: enum_utils_1.getEnumType(enumValues),
                    enum: enumValues
                };
                delete propertyCompilerMetadata.enum;
            }
            else if (propertyCompilerMetadata.enum) {
                const enumValues = enum_utils_1.getEnumValues(propertyCompilerMetadata.enum);
                propertyCompilerMetadata.enum = enumValues;
                propertyCompilerMetadata.type = enum_utils_1.getEnumType(enumValues);
            }
            const propertyMetadata = this.mergePropertyWithMetadata(key, Object, schemas, schemaRefsStack, propertyCompilerMetadata);
            const keysToRemove = ['isArray', 'name'];
            const validMetadataObject = lodash_1.omit(propertyMetadata, keysToRemove);
            properties[key] = validMetadataObject;
        });
        return {
            name: key,
            type: 'object',
            properties
        };
    }
    isArrayCtor(type) {
        return type === Array;
    }
    isPrimitiveType(type) {
        return (lodash_1.isFunction(type) &&
            [String, Boolean, Number].some((item) => item === type));
    }
    isLazyTypeFunc(type) {
        return lodash_1.isFunction(type) && type.name == 'type';
    }
    getTypeName(type) {
        return type && lodash_1.isFunction(type) ? type.name : type;
    }
    isObjectLiteral(obj) {
        if (typeof obj !== 'object' || !obj) {
            return false;
        }
        const hasOwnProp = Object.prototype.hasOwnProperty;
        let objPrototype = obj;
        while (Object.getPrototypeOf((objPrototype = Object.getPrototypeOf(objPrototype))) !== null)
            ;
        for (const prop in obj) {
            if (!hasOwnProp.call(obj, prop) && !hasOwnProp.call(objPrototype, prop)) {
                return false;
            }
        }
        return Object.getPrototypeOf(obj) === objPrototype;
    }
}
exports.SchemaObjectFactory = SchemaObjectFactory;
