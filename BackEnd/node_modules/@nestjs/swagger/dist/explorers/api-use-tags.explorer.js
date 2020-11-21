"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exploreApiTagsMetadata = exports.exploreGlobalApiTagsMetadata = void 0;
const constants_1 = require("../constants");
exports.exploreGlobalApiTagsMetadata = (metatype) => {
    const tags = Reflect.getMetadata(constants_1.DECORATORS.API_TAGS, metatype);
    return tags ? { tags } : undefined;
};
exports.exploreApiTagsMetadata = (instance, prototype, method) => Reflect.getMetadata(constants_1.DECORATORS.API_TAGS, method);
