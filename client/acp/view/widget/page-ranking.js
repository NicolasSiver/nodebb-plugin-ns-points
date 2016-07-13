import React from 'react';
import {connect} from 'react-redux';

class PageRanking extends React.Component {
    render() {
        return (
            <div>
                <div className="">
                    
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        calculationProperties: state.calculationProperties
    };
})(PageRanking);