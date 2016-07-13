import Immutable from 'immutable';

import * as ActionTypes from './action-types';
import * as Pages from './pages';

const Page = new Immutable.Record({name: 'Default', value: 'None'});
const pages = new Immutable.List([
    new Page({name: 'Ranking', value: Pages.RANKING}),
    new Page({name: 'Manage', value: Pages.MANAGE}),
    new Page({name: 'Integrations', value: Pages.PLUGINS}),
    new Page({name: 'Settings', value: Pages.SETTINGS})
]);

export function calculationProperties(state = new Immutable.Map({}), action) {
    switch (action.type) {
        case ActionTypes.CALCULATION_PROPERTY_WILL_UPDATE:
            let propertyUpdate = {};
            propertyUpdate[action.payload.property] = action.payload.value;
            return state.merge(propertyUpdate);
        case ActionTypes.CALCULATION_PROPERTIES_DID_UPDATE:
            return state.merge(action.payload);
        default:
            return state;
    }
}

export function calculationPropertiesChanged(state = false, action) {
    switch (action.type) {
        case ActionTypes.CALCULATION_PROPERTY_WILL_UPDATE:
            return true;
        default:
            return state;
    }
}

export function section(state = Pages.RANKING, action) {
    switch (action.type) {
        case ActionTypes.SECTION_WILL_CHANGE:
            return action.payload.section;
        default:
            return state;
    }
}

export function sections(state = pages, action) {
    return state;
}