import Immutable from 'immutable';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

import * as Reducers from './reducers';

export default class ReduxStore {
    constructor() {
        this.store = createStore(combineReducers(Reducers), new Immutable.Map({}), applyMiddleware(ReduxThunk));
    }

    dispatch(action) {
        return this.store.dispatch(action);
    }

    getStore() {
        return this.store;
    }
}
