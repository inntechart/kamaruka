import React from 'react';

// styles
import './Donat.scss';

// components
import Square from '../../ui/square';

const Donate = ({img, img2, img3}) => {
    return <div className={ `donate` }>
        <Square classname={`after green`} style={{backgroundImage: `url(${img})`}}>
            <h3>Here to Help</h3>
            <p>Positive choice change</p>
        </Square>
        <Square routeTo={'/philosophy/intervention-program'} classname={`after orange`} style={{backgroundImage: `url(${img2})`}}>
            <h3>
                Intervention
                br
                Program
            </h3>
        </Square>
        <Square routeTo={'/payments/donations'} classname={`after lightgreen`} style={{backgroundImage: `url(${img3})`}}>
            <h3>Donations</h3>
        </Square>
    </div>;
};

export default Donate;