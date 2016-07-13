import React from 'react';
import {connect} from 'react-redux';

import {updateProperty} from '../../actions/simple-actions';

class PageRanking extends React.Component {
    constructor(props) {
        super(props);
        this.texts = {
            postWeight            : {
                title: 'Weight: Post',
                hint : 'Points given for every post'
            },
            topicWeight           : {
                title: 'Weight: Topic',
                hint : 'Points given for every created topic'
            },
            reputationWeight      : {
                title: 'Weight: Reputation',
                hint : 'Points given for reputation grow'
            },
            reputationActionWeight: {
                title: 'Weight: Reputation Action',
                hint : `Points given for increasing someone's reputation`
            },
            basePoints            : {
                title: 'Base Points',
                hint : 'Points needed to achieve very first level up'
            },
            baseGrow              : {
                title: 'Base Grow',
                hint : 'Determines how many extra points needed to achieve every next level'
            }
        };
    }

    createButton() {
        return (
            <button
                className="btn btn-primary"
                type="button"
                onClick={() => {}}><i className="fa fa-floppy-o"></i> Save Changes
            </button>
        );
    }

    generateFields(fields) {
        // Convert to N columns, possible values - 2, 3, 4, 6, 12
        let columns = 2, rows = [], index = 0, cursor = 0;
        let columnClass = `col-md-${12 / columns}`;

        for (let key of fields.keys()) {
            if (!rows[index]) {
                rows[index] = [];
            }
            rows[index].push(key);

            cursor++;
            if (cursor % columns == 0) {
                index++;
            }
        }

        return (
            <div>
                {rows.map(columnList => {
                    return (
                        <div className="row">
                            {columnList.map(fieldKey => {
                                let textData = this.texts[fieldKey];
                                return (
                                    <div className={columnClass}>
                                        <div className='form-group'>
                                            <label htmlFor={fieldKey}>{textData.title}</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id={fieldKey}
                                                value={this.props.calculationProperties.get(fieldKey)}
                                                onChange={(e) => this.propertyDidChange(fieldKey, e.target.value)}/>
                                            {textData.hint}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    propertyDidChange(property, value) {
        console.log(`Property ${property} did change, value: ${value}`);
        this.props.dispatch(updateProperty(property, value));
    }

    render() {
        let saveButton = (this.props.calculationPropertiesChanged) ? this.createButton() : null;
        return (
            <div className="row">
                <div className="col-md-8">
                    {this.generateFields(this.props.calculationProperties)}
                    {saveButton}
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        calculationProperties       : state.calculationProperties,
        calculationPropertiesChanged: state.calculationPropertiesChanged
    };
})(PageRanking);
