import { Connection } from 'typeorm';
import { BaseDatabase } from 'admin-bro';
import { Resource } from './Resource';
export declare class Database extends BaseDatabase {
    readonly connection: Connection;
    constructor(connection: Connection);
    resources(): Array<Resource>;
    static isAdapterFor(connection: any): boolean;
}
