import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';

export default class ReduxStore {
    constructor() {
        this.store = createStore(combineReducers(reducers));
    }

    getStore() {
        return this.store;
    }
}
