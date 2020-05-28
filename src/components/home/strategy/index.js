import React from 'react';

// styles
import './Strategy.scss';

// components
import Square from '../../ui/square';

const Strategy = ({ img }) => {
    return <div className={ ` strategy ` }>
        <div className={ `right_side` }>
            <Square style={ { backgroundColor: '#00499E' } }>
                <h3>
                    Our <br />
                    Strategy
                </h3>
            </Square>
        </div>
        <div className={ `left_side` }>
            <div className="square left_item-1">
                <Square style={ { backgroundColor: '#125E00' } }>
                    <h3>
                        ADHD & ASD
                    </h3>
                    <p>Self-management for success</p>
                </Square>
            </div>
            <div className="right_row">
                <div className="square left_item-2">
                    <Square routeTo={'/payments/fees'} classname={ `after lightgreen` } style={ { backgroundImage: `url(${ img })` } }>
                        <h3>Payments</h3>
                    </Square>
                </div>
                <div className="square left_item-3">
                    <Square routeTo={'/contact/location'} style={ { backgroundColor: '#D65C00' } }>
                        <h3>Map</h3>
                    </Square>
                </div>
            </div>
        </div>
    </div>;
};

export default Strategy;