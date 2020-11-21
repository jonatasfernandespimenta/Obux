"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const admin_bro_1 = require("admin-bro");
const Property_1 = require("./Property");
const convertFilter_1 = require("./utils/convertFilter");
class Resource extends admin_bro_1.BaseResource {
    constructor(model) {
        super(model);
        this.propsObject = {};
        this.model = model;
        this.propsObject = this.prepareProps();
    }
    databaseName() {
        return this.model.getRepository().metadata.connection.options.database || 'typeorm';
    }
    databaseType() {
        return this.model.getRepository().metadata.connection.options.type || 'typeorm';
    }
    name() {
        return this.model.name;
    }
    id() {
        return this.model.name;
    }
    properties() {
        return [...Object.values(this.propsObject)];
    }
    property(path) {
        return this.propsObject[path];
    }
    count(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.count(({
                where: convertFilter_1.convertFilter(filter),
            }));
        });
    }
    find(filter, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { limit = 10, offset = 0, sort = {} } = params;
            const { direction, sortBy } = sort;
            const instances = yield this.model.find({
                where: convertFilter_1.convertFilter(filter),
                take: limit,
                skip: offset,
                order: {
                    [sortBy]: (direction || 'asc').toUpperCase(),
                },
            });
            return instances.map((instance) => new admin_bro_1.BaseRecord(instance, this));
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.model.findOne(id);
            if (!instance) {
                return null;
            }
            return new admin_bro_1.BaseRecord(instance, this);
        });
    }
    findMany(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const instances = yield this.model.findByIds(ids);
            return instances.map((instance) => new admin_bro_1.BaseRecord(instance, this));
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.model.create(this.prepareParams(params));
            yield this.validateAndSave(instance);
            return instance;
        });
    }
    update(pk, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.model.findOne(pk);
            if (instance) {
                const preparedParams = this.prepareParams(params);
                Object.keys(preparedParams).forEach((paramName) => {
                    instance[paramName] = preparedParams[paramName];
                });
                yield this.validateAndSave(instance);
                return instance;
            }
            throw new Error('Instance not found.');
        });
    }
    delete(pk) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.model.delete(pk);
            }
            catch (error) {
                if (error.name === 'QueryFailedError') {
                    throw new admin_bro_1.ValidationError({}, {
                        type: 'QueryFailedError',
                        message: error.message,
                    });
                }
                throw error;
            }
        });
    }
    prepareProps() {
        const { columns } = this.model.getRepository().metadata;
        return columns.reduce((memo, col, index) => {
            const property = new Property_1.Property(col, index);
            return Object.assign(Object.assign({}, memo), { [property.path()]: property });
        }, {});
    }
    /** Converts params from string to final type */
    prepareParams(params) {
        const preparedParams = Object.assign({}, params);
        this.properties().forEach((property) => {
            const param = admin_bro_1.flat.get(preparedParams, property.path());
            const key = property.path();
            // eslint-disable-next-line no-continue
            if (param === undefined) {
                return;
            }
            const type = property.type();
            if (type === 'mixed') {
                preparedParams[key] = param;
            }
            if (type === 'number') {
                preparedParams[key] = Number(param);
            }
            if (type === 'reference') {
                if (param === null) {
                    preparedParams[property.column.propertyName] = null;
                }
                else {
                    // references cannot be stored as an IDs in typeorm, so in order to mimic this) and
                    // not fetching reference resource) change this:
                    // { postId: "1" }
                    // to that:
                    // { post: { id: 1 } }
                    const id = (property.column.type === Number) ? Number(param) : param;
                    preparedParams[property.column.propertyName] = { id };
                }
            }
        });
        return preparedParams;
    }
    // eslint-disable-next-line class-methods-use-this
    validateAndSave(instance) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Resource.validate) {
                const errors = yield Resource.validate(instance);
                if (errors && errors.length) {
                    const validationErrors = errors.reduce((memo, error) => (Object.assign(Object.assign({}, memo), { [error.property]: {
                            type: Object.keys(error.constraints)[0],
                            message: Object.values(error.constraints)[0],
                        } })), {});
                    throw new admin_bro_1.ValidationError(validationErrors);
                }
            }
            try {
                yield instance.save();
            }
            catch (error) {
                if (error.name === 'QueryFailedError') {
                    throw new admin_bro_1.ValidationError({
                        [error.column]: {
                            type: 'QueryFailedError',
                            message: error.message,
                        },
                    });
                }
            }
        });
    }
    static isAdapterFor(rawResource) {
        try {
            return !!rawResource.getRepository().metadata;
        }
        catch (e) {
            return false;
        }
    }
}
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map