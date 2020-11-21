import { AdminBroOptions } from '../../admin-bro-options.interface';
import { PageJSON } from '../interfaces';
declare const pagesToStore: (pages?: AdminBroOptions['pages']) => Array<PageJSON>;
export default pagesToStore;
