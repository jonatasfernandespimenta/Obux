"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiExtraModels = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("./helpers");
function ApiExtraModels(...models) {
    return helpers_1.createMixedDecorator(constants_1.DECORATORS.API_EXTRA_MODELS, models);
}
exports.ApiExtraModels = ApiExtraModels;
