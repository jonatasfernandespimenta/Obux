"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeForceRefresh = exports.hasForceRefresh = exports.appendForceRefresh = exports.REFRESH_KEY = void 0;
const REFRESH_KEY = 'refresh';
/**
 * Adds refresh=true to the url, which in turn should cause list to reload.
 *
 * @param {string} url      url to which function should add `refresh`
 * @param {string} [search] optional search query which should be updated,
 *                          if not given function will use window.location.search
 * @private
 */

exports.REFRESH_KEY = REFRESH_KEY;

const appendForceRefresh = (url, search) => {
  const params = new URLSearchParams(search !== null && search !== void 0 ? search : window.location.search);
  params.set(REFRESH_KEY, 'true');
  return `${url}?${params}`;
};

exports.appendForceRefresh = appendForceRefresh;

const hasForceRefresh = search => {
  const params = new URLSearchParams(search);
  return !!params.get(REFRESH_KEY);
};

exports.hasForceRefresh = hasForceRefresh;

const removeForceRefresh = search => {
  const params = new URLSearchParams(search);

  if (params.get(REFRESH_KEY)) {
    params.delete(REFRESH_KEY);
  }

  return params.toString();
};

exports.removeForceRefresh = removeForceRefresh;