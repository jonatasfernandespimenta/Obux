"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergePluginOptions = void 0;
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const defaultOptions = {
    dtoFileNameSuffix: ['.dto.ts', '.entity.ts'],
    controllerFileNameSuffix: ['.controller.ts'],
    classValidatorShim: true,
    dtoKeyOfComment: 'description',
    controllerKeyOfComment: 'description',
    introspectComments: false
};
exports.mergePluginOptions = (options = {}) => {
    if (shared_utils_1.isString(options.dtoFileNameSuffix)) {
        options.dtoFileNameSuffix = [options.dtoFileNameSuffix];
    }
    if (shared_utils_1.isString(options.controllerFileNameSuffix)) {
        options.controllerFileNameSuffix = [options.controllerFileNameSuffix];
    }
    return Object.assign(Object.assign({}, defaultOptions), options);
};
