import React from 'react';
import {Provider} from 'react-redux';

import * as Actions from '../../controller/actions';
import loadCalculationProperties from '../../actions/load-calculation-properties';
import loadSettings from '../../actions/load-settings';
import ReduxStore from '../../model/redux-store';
import TabHost from './tab-host';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.mainStore = new ReduxStore();
    }

    componentDidMount() {
        this.mainStore.dispatch(loadCalculationProperties());
        this.mainStore.dispatch(loadSettings());
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body">
                <Provider store={this.mainStore.getStore()}>
                    <TabHost/>
                </Provider>
            </div>
        </div>;
    }
}
