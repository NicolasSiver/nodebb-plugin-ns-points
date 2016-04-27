import {connect} from 'react-redux';
import React from 'react';

class PagePlugins extends React.Component {
    render() {
        return <div className="alert alert-info" role="alert">Functionality will be added with a next big update. Points will provide API for integration with another plugins.</div>;
    }
}

export default connect()(PagePlugins);