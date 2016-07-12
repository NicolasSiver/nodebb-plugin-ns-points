import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

import * as reducers from './reducers';

export default class ReduxStore {
    constructor() {
        this.store = createStore(combineReducers(reducers), applyMiddleware(ReduxThunk));
    }

    dispatch(action) {
        return this.store.dispatch(action);
    }

    getStore() {
        return this.store;
    }
}
