import React from 'react';

// styles
import styles from '../Contact.module.scss';
import Button from '../../ui/button';

const Enquiry = () => {
    return <div className={styles.enquiry}>
        <h5 className={styles.enquiry_heading}>Online</h5>
        <a className={styles.enquiry_link} href="/">info@kamaruka.vic.edu.au</a>
        <Button style={{backgroundColor: '#0560C9', height: '40px'}}>
            <a href="/">ENQUIRY FORM</a>
        </Button>
    </div>
};

export default Enquiry;