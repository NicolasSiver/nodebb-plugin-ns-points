import * as ActionType from './action-type';
import * as Pages from './pages';

let pages = [
    {name: 'Ranking', value: Pages.RANKING},
    {name: 'Manage', value: Pages.MANAGE},
    {name: 'Integrations', value: Pages.PLUGINS},
    {name: 'Settings', value: Pages.SETTINGS}
];

export function section(state = Pages.RANKING, action) {
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