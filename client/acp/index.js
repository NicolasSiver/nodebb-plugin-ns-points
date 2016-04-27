import Dashboard from './view/widget/dashboard';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <Dashboard />,
    document.getElementsByClassName('points-acp-dashboard')[0]
);