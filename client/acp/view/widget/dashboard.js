import {Provider} from 'react-redux';
import React from 'react';
import ReduxStore from '../../model/redux-store';
import TabHost from './tab-host';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let mainStore = new ReduxStore();

        return <div className="panel panel-default">
            <div className="panel-body">
                <Provider store={mainStore.getStore()}>
                    <TabHost/>
                </Provider>
            </div>
        </div>;
    }
}
