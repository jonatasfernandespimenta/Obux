"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MimetypeContentWrapper = void 0;
class MimetypeContentWrapper {
    wrap(mimetype, obj) {
        const content = mimetype
            .map((item) => ({
            [item]: obj
        }))
            .reduce((a, b) => (Object.assign(Object.assign({}, a), b)), {});
        return { content };
    }
}
exports.MimetypeContentWrapper = MimetypeContentWrapper;
