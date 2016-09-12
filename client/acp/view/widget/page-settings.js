import React from 'react';
import {connect} from 'react-redux';

import {setMaxOverviewUsers} from '../../actions/simple-actions';

class PageSettings extends React.Component {
    constructor(props) {
        super(props);
        this.setMaxUsers = (e) => {
            var users = e.target.value;
            if (users) {
                this.props.dispatch(setMaxOverviewUsers(users));
            }
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className='form-group'>
                            <label htmlFor="overviewMembers">Overview</label>
                            <input
                                type="number"
                                className="form-control"
                                id="overviewMembers"
                                value={this.props.settings.maxUsers}
                                onChange={this.setMaxUsers}/>
                            How many persons should be shown at Overview page.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        settings       : state.settings,
        settingsChanged: state.settingsChanged
    };
})(PageSettings);
