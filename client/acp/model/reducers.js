import u from 'updeep';

import * as ActionTypes from './action-types';
import * as Pages from './pages';

const PAGES = [
    {name: 'Ranking', value: Pages.RANKING},
    {name: 'Manage', value: Pages.MANAGE},
    {name: 'Integrations', value: Pages.PLUGINS},
    {name: 'Settings', value: Pages.SETTINGS}
];

export function calculationProperties(state = {}, action) {
    switch (action.type) {
        case ActionTypes.CALCULATION_PROPERTY_WILL_UPDATE:
            let propertyUpdate = {};
            propertyUpdate[action.payload.property] = action.payload.value;
            return u(propertyUpdate, state);
        case ActionTypes.CALCULATION_PROPERTIES_DID_UPDATE:
            return u(action.payload, state);
        default:
            return state;
    }
}

export function calculationPropertiesChanged(state = false, action) {
    switch (action.type) {
        case ActionTypes.CALCULATION_PROPERTY_WILL_UPDATE:
            return true;
        case ActionTypes.CALCULATION_PROPERTIES_DID_STORE:
            return false;
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

export function sections(state = PAGES, action) {
    return state;
}