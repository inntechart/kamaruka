import React from 'react';

// styles
import './Careers.scss';

// components
import Square from '../../ui/square';

const Careers = () => {
    return <div className={ `careers` }>
        <Square classname={`fs-35`} style={ { backgroundColor: '#000' } }>
            <h3>Kamaruka derives from an <br/> aboriginal term meaning <br/> “Camp of the spirit children”</h3>
        </Square>
        <Square style={ { backgroundColor: '#206FCB' } }>
            <h3>Careers</h3>
        </Square>
    </div>;
};

export default Careers;