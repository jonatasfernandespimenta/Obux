/*
  @license
	Rollup.js v2.33.3
	Wed, 18 Nov 2020 05:54:45 GMT - commit 07868398277174501db6703d0bcdfc6b89d6fa6e


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

require('./shared/rollup.js');
require('fs');
require('path');
require('./shared/mergeOptions.js');
var loadConfigFile_js = require('./shared/loadConfigFile.js');
require('crypto');
require('events');
require('url');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
