import React from 'react';
import {connect} from 'react-redux';

class PageSettings extends React.Component {
    constructor(props) {
        super(props);
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
                                onChange={(e) => undefined}/>
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
        settings: state.settings
    };
})(PageSettings);