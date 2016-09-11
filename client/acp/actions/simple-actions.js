import * as ActionTypes from '../model/action-types';

export function changeSection(page) {
    return {
        type   : ActionTypes.SECTION_WILL_CHANGE,
        payload: {
            section: page
        }
    };
}

export function propertiesSaved() {
    return {
        type: ActionTypes.CALCULATION_PROPERTIES_DID_STORE
    }
}

export function updateProperties(properties) {
    return {
        type   : ActionTypes.CALCULATION_PROPERTIES_DID_UPDATE,
        payload: properties
    };
}

export function updateProperty(property, value) {
    return {
        type   : ActionTypes.CALCULATION_PROPERTY_WILL_UPDATE,
        payload: {property, value}
    };
}