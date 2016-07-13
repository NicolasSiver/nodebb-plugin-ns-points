import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';

import {changeSection} from '../../controller/actions';
import * as Pages from '../../model/pages';
import PagePlugins from './page-plugins';
import PageRanking from './page-ranking';

class TabHost extends React.Component {
    createSection(page) {
        switch (page) {
            case Pages.RANKING:
                return <PageRanking />;
            case Pages.PLUGINS:
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
                <div className="tab-pane active">
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
