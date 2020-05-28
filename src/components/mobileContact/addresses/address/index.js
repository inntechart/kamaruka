import React from 'react';

// styles
import styles from '../../Contact.module.scss';

const Address = ({heading, street, region, quntry}) => {
    return <div className={styles.addresses__address}>
        <h6 className={styles.addresses__address_heading}>{heading}</h6>
        <address>
            <span>{street}</span>
            <span>{region}</span>
            <span>{quntry}</span>
        </address>
    </div>
};

export default Address;