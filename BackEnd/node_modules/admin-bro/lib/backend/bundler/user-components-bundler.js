"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = build;
exports.outPath = void 0;

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

var util = _interopRequireWildcard(require("util"));

var _bundler = _interopRequireDefault(require("./bundler"));

var _generateUserComponentEntry = _interopRequireDefault(require("./generate-user-component-entry"));

var _constants = require("../../constants");

var _bundlerEnv = _interopRequireDefault(require("./bundler-env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const entryPath = path.join(_constants.ADMIN_BRO_TMP_DIR, '.entry.js');
const outPath = path.join(_constants.ADMIN_BRO_TMP_DIR, 'bundle.js');
exports.outPath = outPath;

async function build(admin, {
  write = false,
  watch = false
} = {}) {
  const entryFile = (0, _generateUserComponentEntry.default)(admin, _constants.ADMIN_BRO_TMP_DIR);

  try {
    await util.promisify(fs.mkdir)(_constants.ADMIN_BRO_TMP_DIR, {
      recursive: true
    });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  } // if components bundle was requested and there are already bundled - return
  // that instead of bundling them again


  if (!write) {
    try {
      const existingBundle = await util.promisify(fs.readFile)(outPath, 'utf-8');
      return existingBundle;
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  await util.promisify(fs.writeFile)(entryPath, entryFile);
  const output = await (0, _bundler.default)({
    name: 'AdminBroCustom',
    input: entryPath,
    watch,
    file: write ? outPath : null,
    minify: _bundlerEnv.default === 'production'
  });
  let jsOutput = output.code;

  if (output.map) {
    jsOutput += `
//# sourceMappingURL=data:application/json;charset=utf-8;base64,${Buffer.from(JSON.stringify(output.map)).toString('base64')}
    `;
  }

  return jsOutput;
}