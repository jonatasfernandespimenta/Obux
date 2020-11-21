import { BaseEntity, FindConditions } from 'typeorm';
import { Filter } from 'admin-bro';
export declare function convertFilter(filter?: Filter): FindConditions<BaseEntity>;
