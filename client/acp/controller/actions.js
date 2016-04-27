import * as ActionType from '../model/action-type';

export function changeSection(page) {
    return {
        type   : ActionType.SECTION_WILL_CHANGE,
        payload: {
            section: page
        }
    };
}