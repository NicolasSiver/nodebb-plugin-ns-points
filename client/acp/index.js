import Dashboard from './view/widget/dashboard';
import React from 'react';
import ReactDom from 'react-dom';

export function init() {
    return ReactDom.render(
        <Dashboard />,
        document.getElementsByClassName('points-acp-dashboard')[0]
    );
}
