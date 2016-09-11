import React from 'react';
import {connect} from 'react-redux';

class PagePlugins extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-info" role="alert">Functionality will be added with a next big update.
                    Plugin
                    will provide API for integration with another plugins.
                </div>
            </div>
        );
    }
}

export default connect()(PagePlugins);