import React from 'react';

// styles
import './Anniversary.scss';

// components
import Square from '../../ui/square';

const Anniversary = ({ img }) => {
    return <div className={ ` anniversary ` }>
        <div className={ `left_side` }>
            <div className="square ">
                <Square style={ { backgroundColor: '#125E00' } }>
                    <h3>Modified Curriculum</h3>
                    <p>Tailored for each student</p>
                </Square>
            </div>
            <div className="left_row">
                <div className="square">
                    <Square style={ { backgroundColor: '#D65C00' } }>
                        <h3>
                            Literacy <br />
                            Intervention
                        </h3>
                    </Square>
                </div>
                <div className="square ann_img">
                    <img src={ img } alt="Ann" />
                </div>
            </div>
        </div>
        <div className={ `right_side` }>
            <Square style={ { backgroundColor: '#00499E' } }>
                <h3>Result</h3>
            </Square>
        </div>
    </div>;
};

export default Anniversary;