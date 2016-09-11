import React from 'react';
import {connect} from 'react-redux';

class PageManage extends React.Component {
    render() {
        return (
            <div>
                <div className="alert alert-info" role="alert">
                    Functionality will be added with a next big update.
                    Ability to set points or grant particular amount for the user.
                </div>
            </div>
        );
    }
}

export default connect()(PageManage);