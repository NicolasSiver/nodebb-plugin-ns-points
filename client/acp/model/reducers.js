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