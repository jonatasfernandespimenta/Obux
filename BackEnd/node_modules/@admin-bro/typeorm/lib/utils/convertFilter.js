"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFilter = void 0;
const typeorm_1 = require("typeorm");
function safeParseJSON(json) {
    try {
        return JSON.parse(json);
    }
    catch (e) {
        return null;
    }
}
function convertFilter(filter) {
    if (!filter)
        return {};
    const { filters } = filter;
    const where = {};
    for (const n in filters) {
        const one = filters[n];
        if (['boolean', 'number', 'float', 'object', 'array'].includes(one.property.type())) {
            where[n] = safeParseJSON(one.value);
        }
        else if (['date', 'datetime'].includes(one.property.type())) {
            if (typeof one.value !== 'string' && one.value.from && one.value.to)
                where[n] = typeorm_1.Between(new Date(one.value.from), new Date(one.value.to));
            else if (typeof one.value !== 'string' && one.value.from)
                where[n] = typeorm_1.MoreThanOrEqual(new Date(one.value.from));
            else if (typeof one.value !== 'string' && one.value.to)
                where[n] = typeorm_1.LessThanOrEqual(new Date(one.value.to));
        }
        else if (one.property.column.type === 'enum') {
            where[n] = one.value;
        }
        else if (one.property.type() === 'reference') {
            // when comes to reference TypeORM cannot filter by referenceId: YOUR_FILTER_VALUE
            // I don't know why. But it filters by an object: reference: {id: YOUR_FILTER_VALUE}
            // propertyPath holds `reference.id` that is why we split it by `.`
            const [column, key] = one.property.column.propertyPath.split('.');
            where[column] = {
                [key]: one.value,
            };
        }
        else {
            where[n] = typeorm_1.Like(`%${one.value}%`);
        }
    }
    return where;
}
exports.convertFilter = convertFilter;
//# sourceMappingURL=convertFilter.js.map