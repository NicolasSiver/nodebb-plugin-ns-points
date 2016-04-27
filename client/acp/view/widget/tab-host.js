import {changeSection} from '../../controller/actions';
import classNames from 'classnames';
import {connect} from 'react-redux';
import * as Page from '../../model/page';
import PagePlugins from './page-plugins';
import React from 'react';

class TabHost extends React.Component {
    createSection(page) {
        switch (page) {
            case Page.PLUGINS:
                return <PagePlugins />;
            default:
                return null;
        }
    }

    render() {
        return <div className="tab-host">
            <ul className="nav nav-tabs">
                {this.props.sections.map((section) => {
                    let liClass = classNames({active: this.props.section === section.value});
                    return (
                        <li className={liClass} onClick={(e) => this.props.dispatch(changeSection(section.value))}>
                            <a href="#" data-section={section.value}>{section.name}</a>
                        </li>
                    );
                })}
            </ul>

            <div className="tab-content">
                <div className="tab-pane">
                    {this.createSection(this.props.section)}
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
