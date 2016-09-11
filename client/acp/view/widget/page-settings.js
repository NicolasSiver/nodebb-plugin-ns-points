import React from 'react';
import {connect} from 'react-redux';

class PageSettings extends React.Component {
    render() {
        return (
            <div>
                <h5>Action Weight</h5>

                <p>Weight values should be here.</p>

                <h5>Display</h5>

                <p>Settings for how many persons on the dedicated page should be here.</p>
            </div>
        );
    }
}

export default connect()(PageSettings);