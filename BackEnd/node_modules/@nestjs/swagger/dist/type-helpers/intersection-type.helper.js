"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionType = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const constants_1 = require("../constants");
const decorators_1 = require("../decorators");
const model_properties_accessor_1 = require("../services/model-properties-accessor");
const mapped_types_utils_1 = require("./mapped-types.utils");
const modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
function IntersectionType(classARef, classBRef) {
    const fieldsOfA = modelPropertiesAccessor.getModelProperties(classARef.prototype);
    const fieldsOfB = modelPropertiesAccessor.getModelProperties(classBRef.prototype);
    class IntersectionTypeClass {
        constructor() {
            mapped_types_1.inheritPropertyInitializers(this, classARef);
            mapped_types_1.inheritPropertyInitializers(this, classBRef);
        }
    }
    mapped_types_1.inheritValidationMetadata(classARef, IntersectionTypeClass);
    mapped_types_1.inheritTransformationMetadata(classARef, IntersectionTypeClass);
    mapped_types_1.inheritValidationMetadata(classBRef, IntersectionTypeClass);
    mapped_types_1.inheritTransformationMetadata(classBRef, IntersectionTypeClass);
    mapped_types_utils_1.clonePluginMetadataFactory(IntersectionTypeClass, classARef.prototype);
    mapped_types_utils_1.clonePluginMetadataFactory(IntersectionTypeClass, classBRef.prototype);
    fieldsOfA.forEach((propertyKey) => {
        const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classARef.prototype, propertyKey);
        const decoratorFactory = decorators_1.ApiProperty(metadata);
        decoratorFactory(IntersectionTypeClass.prototype, propertyKey);
    });
    fieldsOfB.forEach((propertyKey) => {
        const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classBRef.prototype, propertyKey);
        const decoratorFactory = decorators_1.ApiProperty(metadata);
        decoratorFactory(IntersectionTypeClass.prototype, propertyKey);
    });
    Object.defineProperty(IntersectionTypeClass, 'name', {
        value: `Intersection${classARef.name}${classBRef.name}`
    });
    return IntersectionTypeClass;
}
exports.IntersectionType = IntersectionType;
