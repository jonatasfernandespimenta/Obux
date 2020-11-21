"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbol = exports.isEmpty = exports.isNil = exports.isConstructor = exports.isString = exports.isFunction = exports.validatePath = exports.isPlainObject = exports.isObject = exports.isUndefined = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
exports.isUndefined = (obj) => typeof obj === 'undefined';
exports.isObject = (fn) => !exports.isNil(fn) && typeof fn === 'object';
exports.isPlainObject = (fn) => {
    if (!exports.isObject(fn)) {
        return false;
    }
    const proto = Object.getPrototypeOf(fn);
    if (proto === null) {
        return true;
    }
    const ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
        proto.constructor;
    return (typeof ctor === 'function' &&
        ctor instanceof ctor &&
        Function.prototype.toString.call(ctor) ===
            Function.prototype.toString.call(Object));
};
exports.validatePath = (path) => path ? (path.charAt(0) !== '/' ? '/' + path : path) : '';
exports.isFunction = (fn) => typeof fn === 'function';
exports.isString = (fn) => typeof fn === 'string';
exports.isConstructor = (fn) => fn === 'constructor';
exports.isNil = (obj) => exports.isUndefined(obj) || obj === null;
exports.isEmpty = (array) => !(array && array.length > 0);
exports.isSymbol = (fn) => typeof fn === 'symbol';
