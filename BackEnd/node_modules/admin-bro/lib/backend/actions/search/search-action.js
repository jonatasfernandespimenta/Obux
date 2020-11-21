"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchAction = void 0;

var _filter = _interopRequireDefault(require("../../utils/filter/filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @implements Action
 * @category Actions
 * @module SearchAction
 * @description
 * Used to search particular record based on "title" property. It is used by
 * select fields with autocomplete.
 * Uses {@link ShowAction} component to render form
 * @private
 */
const SearchAction = {
  name: 'search',
  isVisible: false,
  actionType: 'resource',

  /**
   * Search records by query string.
   *
   * To invoke this action use {@link ApiClient#resourceAction}
   * @memberof module:SearchAction
   *
   * @return  {Promise<SearchResponse>}  populated record
   * @implements ActionHandler
   */
  handler: async (request, response, data) => {
    var _decorated$options, _decorated$options$so;

    const {
      currentAdmin,
      resource
    } = data;
    const queryString = request.params && request.params.query;
    const decorated = resource.decorate();
    const titlePropertyName = decorated.titleProperty().name();
    const filters = queryString ? {
      [titlePropertyName]: queryString
    } : {};
    const filter = new _filter.default(filters, resource);
    const sortBy = ((_decorated$options = decorated.options) === null || _decorated$options === void 0 ? void 0 : (_decorated$options$so = _decorated$options.sort) === null || _decorated$options$so === void 0 ? void 0 : _decorated$options$so.sortBy) || titlePropertyName;
    const records = await resource.find(filter, {
      limit: 50,
      sort: {
        sortBy,
        direction: 'asc'
      }
    });
    return {
      records: records.map(record => record.toJSON(currentAdmin))
    };
  }
};
exports.SearchAction = SearchAction;
var _default = SearchAction;
/**
 * Response of a [Search]{@link ApiController#search} action in the API
 * @memberof module:SearchAction
 * @alias SearchResponse
 */

exports.default = _default;