import * as ActionType from './action-type';
import * as Page from './page';

let pages = [
    {name: 'Ranking', value: Page.RANKING},
    {name: 'Manage', value: Page.MANAGE},
    {name: 'Integrations', value: Page.PLUGINS},
    {name: 'Settings', value: Page.SETTINGS}
];

export function section(state = Page.RANKING, action) {
    switch (action.type) {
        case ActionType.SECTION_WILL_CHANGE:
            return action.payload.section;
        default:
            return state;
    }
}

export function sections(state, action) {
    return pages;
}