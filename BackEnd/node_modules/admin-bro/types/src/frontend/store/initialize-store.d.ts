import { Store } from 'redux';
import { ReduxState } from './store';
import AdminBro from '../../admin-bro';
import { CurrentAdmin } from '../../current-admin.interface';
export declare const initializeStore: (admin: AdminBro, currentAdmin?: CurrentAdmin | undefined) => Promise<Store<ReduxState>>;
export default initializeStore;
