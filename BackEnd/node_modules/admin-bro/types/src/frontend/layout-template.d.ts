import AdminBro from '../admin-bro';
import { CurrentAdmin } from '../current-admin.interface';
/**
 * Renders (SSR) html for given location
 *
 * @param {AdminBro} admin
 * @param {Object} [currentAdmin]
 * @param {String} currentAdmin.email
 * @param {String} location='/'
 *
 * @private
 */
declare const html: (admin: AdminBro, currentAdmin?: CurrentAdmin | undefined, location?: string) => Promise<string>;
export default html;
