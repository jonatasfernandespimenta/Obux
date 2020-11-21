import AdminBro from '../../../admin-bro';
import { CurrentAdmin } from '../../../current-admin.interface';
import { BrandingOptions, Assets } from '../../../admin-bro-options.interface';
export declare const getAssets: (admin: AdminBro, currentAdmin?: CurrentAdmin | undefined) => Promise<Assets>;
export declare const getBranding: (admin: AdminBro, currentAdmin?: CurrentAdmin | undefined) => Promise<BrandingOptions>;
export declare const getFaviconFromBranding: (branding: BrandingOptions) => string;
