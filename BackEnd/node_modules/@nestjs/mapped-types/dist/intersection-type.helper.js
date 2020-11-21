"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionType = void 0;
const type_helpers_utils_1 = require("./type-helpers.utils");
function IntersectionType(classARef, classBRef) {
    class IntersectionClassType {
        constructor() {
            type_helpers_utils_1.inheritPropertyInitializers(this, classARef);
            type_helpers_utils_1.inheritPropertyInitializers(this, classBRef);
        }
    }
    type_helpers_utils_1.inheritValidationMetadata(classARef, IntersectionClassType);
    type_helpers_utils_1.inheritValidationMetadata(classBRef, IntersectionClassType);
    type_helpers_utils_1.inheritTransformationMetadata(classARef, IntersectionClassType);
    type_helpers_utils_1.inheritTransformationMetadata(classBRef, IntersectionClassType);
    Object.defineProperty(IntersectionClassType, 'name', {
        value: `Intersection${classARef.name}${classBRef.name}`,
    });
    return IntersectionClassType;
}
exports.IntersectionType = IntersectionType;
