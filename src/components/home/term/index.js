import React from 'react';

// styles
import './Term.scss';

// components
import Square from '../../ui/square';

const Term = ({ img }) => {
    return <div className={ `term` }>
        <Square routeTo={'/curriculum/term-dates'} classname={ `after lightblue` } style={ { backgroundImage: `url(${ img })` } }>
            <h3>
                Term <br />
                Dates
            </h3>
        </Square>
        <Square style={{backgroundColor: '#000'}}>
            <h3>
                Respect for self <br/>
                Responsibility for one’s actions <br/>
                Respect for others
            </h3>
        </Square>
    </div>;
};

export default Term;