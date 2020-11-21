"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const admin_bro_1 = require("admin-bro");
const data_types_1 = require("./utils/data-types");
class Property extends admin_bro_1.BaseProperty {
    constructor(column, columnPosition = 0) {
        // for reference fields take database name (with ...Id)
        const path = column.referencedColumn ? column.databaseName : column.propertyPath;
        super({ path });
        this.column = column;
        this.columnPosition = columnPosition;
    }
    isEditable() {
        return !this.isId()
            && !this.column.isCreateDate
            && !this.column.isUpdateDate;
    }
    isId() {
        return this.column.isPrimary;
    }
    isSortable() {
        return this.type() !== 'reference';
    }
    reference() {
        const ref = this.column.referencedColumn;
        if (ref)
            return ref.entityMetadata.name;
        return null;
    }
    availableValues() {
        const values = this.column.enum;
        if (values) {
            return values.map((val) => val.toString());
        }
        return null;
    }
    position() {
        return this.columnPosition || 0;
    }
    type() {
        let type = data_types_1.DATA_TYPES[this.column.type];
        if (typeof this.column.type === 'function') {
            if (this.column.type === Number) {
                type = 'number';
            }
            if (this.column.type === String) {
                type = 'string';
            }
            if (this.column.type === Date) {
                type = 'datetime';
            }
            if (this.column.type === Boolean) {
                type = 'boolean';
            }
        }
        if (this.reference()) {
            type = 'reference';
        }
        if (!type) {
            console.warn(`Unhandled type: ${this.column.type}`);
        }
        return type;
    }
}
exports.Property = Property;
//# sourceMappingURL=Property.js.map