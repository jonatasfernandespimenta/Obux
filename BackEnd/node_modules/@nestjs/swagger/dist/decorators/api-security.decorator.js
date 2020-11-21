"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSecurity = void 0;
const constants_1 = require("../constants");
const extend_metadata_util_1 = require("../utils/extend-metadata.util");
function ApiSecurity(name, requirements = []) {
    let metadata = [{ [name]: requirements }];
    return (target, key, descriptor) => {
        if (descriptor) {
            metadata = extend_metadata_util_1.extendMetadata(metadata, constants_1.DECORATORS.API_SECURITY, descriptor.value);
            Reflect.defineMetadata(constants_1.DECORATORS.API_SECURITY, metadata, descriptor.value);
            return descriptor;
        }
        metadata = extend_metadata_util_1.extendMetadata(metadata, constants_1.DECORATORS.API_SECURITY, target);
        Reflect.defineMetadata(constants_1.DECORATORS.API_SECURITY, metadata, target);
        return target;
    };
}
exports.ApiSecurity = ApiSecurity;
