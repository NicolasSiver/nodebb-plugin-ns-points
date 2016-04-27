import * as Page from './page';

let pages = [
    {name: 'Ranking', value: Page.RANKING},
    {name: 'Manage', value: Page.MANAGE},
    {name: 'Integrations', value: Page.PLUGINS},
    {name: 'Settings', value: Page.SETTINGS}
];

export function section(state, action) {
    return Page.RANKING;
}

export function sections(state, action) {
    return pages;
}