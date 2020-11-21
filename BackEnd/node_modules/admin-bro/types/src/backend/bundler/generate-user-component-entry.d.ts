/**
 * Generates entry file for all UsersComponents.
 * Entry consists of 3 parts:
 * 1. setup AdminBro.UserComponents map.
 * 2. List of all environmental variables passed to AdminBro in configuration option.
 * 3. Import of UserComponents defined by AdminBro.bundle(src)
 *
 * @param {AdminBro}    admin
 * @param {String}      entryPath  path to folder where entry file is located
 * @return {String}     content of an entry file
 *
 * @private
 */
declare const generateUserComponentEntry: (admin: any, entryPath: string) => string;
export default generateUserComponentEntry;
