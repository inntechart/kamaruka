import React from 'react';

// styles
import './Contact.scss';
import Square from '../../ui/square';

const Contact = ({ img }) => {
    return <div className={ `contact` }>
        <Square routeTo={'/contact/details'} style={ { backgroundColor: '#206FCB' } }>
            <h3>Contact</h3>
        </Square>
        <Square classname={ `contain` }>
            <img src={ img } alt="Logo" />
        </Square>
        <Square routeTo={'/contact/enquiry'} style={ { backgroundColor: '#D65C00' } }>
            <h3>Enquiry
                <br />
                Form</h3>
        </Square>
    </div>;
};

export default Contact;