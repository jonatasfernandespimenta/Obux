"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBody = void 0;
const lodash_1 = require("lodash");
const enum_utils_1 = require("../utils/enum.utils");
const helpers_1 = require("./helpers");
const defaultBodyMetadata = {
    type: String,
    required: true
};
function ApiBody(options) {
    const [type, isArray] = helpers_1.getTypeIsArrayTuple(options.type, options.isArray);
    const param = Object.assign(Object.assign({ in: 'body' }, lodash_1.omit(options, 'enum')), { type,
        isArray });
    if (enum_utils_1.isEnumArray(options)) {
        enum_utils_1.addEnumArraySchema(param, options);
    }
    else if (enum_utils_1.isEnumDefined(options)) {
        enum_utils_1.addEnumSchema(param, options);
    }
    return helpers_1.createParamDecorator(param, defaultBodyMetadata);
}
exports.ApiBody = ApiBody;
