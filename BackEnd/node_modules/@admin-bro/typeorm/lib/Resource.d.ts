import { BaseEntity } from 'typeorm';
import { BaseResource, Filter, BaseRecord } from 'admin-bro';
import { Property } from './Property';
declare type ParamsType = Record<string, any>;
export declare class Resource extends BaseResource {
    static validate: any;
    private model;
    private propsObject;
    constructor(model: typeof BaseEntity);
    databaseName(): string;
    databaseType(): string;
    name(): string;
    id(): string;
    properties(): Array<Property>;
    property(path: string): Property;
    count(filter: Filter): Promise<number>;
    find(filter: Filter, params: any): Promise<Array<BaseRecord>>;
    findOne(id: string | number): Promise<BaseRecord | null>;
    findMany(ids: Array<string | number>): Promise<Array<BaseRecord>>;
    create(params: Record<string, any>): Promise<ParamsType>;
    update(pk: string | number, params?: any): Promise<ParamsType>;
    delete(pk: string | number): Promise<any>;
    private prepareProps;
    /** Converts params from string to final type */
    private prepareParams;
    validateAndSave(instance: BaseEntity): Promise<any>;
    static isAdapterFor(rawResource: any): boolean;
}
export {};
