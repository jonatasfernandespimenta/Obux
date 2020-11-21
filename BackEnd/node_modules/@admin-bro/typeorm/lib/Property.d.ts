import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { BaseProperty, PropertyType } from 'admin-bro';
export declare class Property extends BaseProperty {
    column: ColumnMetadata;
    private columnPosition;
    constructor(column: ColumnMetadata, columnPosition?: number);
    isEditable(): boolean;
    isId(): boolean;
    isSortable(): boolean;
    reference(): string | null;
    availableValues(): Array<any> | null;
    position(): number;
    type(): PropertyType;
}
