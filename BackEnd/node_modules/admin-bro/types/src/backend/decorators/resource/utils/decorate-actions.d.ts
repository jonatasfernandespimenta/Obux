import { ResourceDecorator } from '..';
import AdminBro from '../../../../admin-bro';
import { BaseResource } from '../../../adapters';
import { ActionDecorator } from '../../action';
export declare type DecoratedActions = {
    [key: string]: ActionDecorator;
};
/**
 * Used to create an {@link ActionDecorator} based on both
 * {@link AdminBro.ACTIONS default actions} and actions specified by the user
 * via {@link AdminBroOptions}
 *
 * @returns {Record<string, ActionDecorator>}
 * @private
 */
export declare function decorateActions(resource: BaseResource, admin: AdminBro, decorator: ResourceDecorator): DecoratedActions;
