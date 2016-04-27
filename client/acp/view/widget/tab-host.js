import classNames from 'classnames';
import {connect} from 'react-redux';
import React from 'react';

class TabHost extends React.Component {
    render() {
        return <div className="tab-host">
            <ul className="nav nav-tabs" role="tablist">
                {this.props.sections.map((section) => {
                    let liClass = classNames({active: this.props.section === section.value});
                    return (
                        <li role="presentation" className={liClass}>
                            <a href="#" aria-controls={section.value} role="tab" data-toggle="tab">{section.name}</a>
                        </li>
                    );
                })}
            </ul>

            <div className="tab-content">
                <div role="tabpanel" className="tab-pane">

                </div>
            </div>
        </div>
    }
}

export default connect((state) => {
    return {
        section : state.section,
        sections: state.sections
    };
})(TabHost);
