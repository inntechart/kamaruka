import React from 'react';

// styles
import styles from '../Contact.module.scss';

// components
import Address from './address';
import Button from '../../ui/button';

const Addresses = () => {
    return <div className={ styles.addresses }>
        <h5 className={ styles.addresses_heading }>Address</h5>
        <Address
            heading="Secondary School"
            street="52 River Street"
            region="South Yarra VIC 3141"
            quntry="Australia"
        />
        <Address
            heading="Primary Annexe"
            street="38-40 River Street"
            region="South Yarra VIC 3141"
            quntry="Australia"
        />
        <Button style={{backgroundColor: '#FF7000', height: '40px'}}>
            <a href="/">MAP</a>
        </Button>
    </div>;
};

export default Addresses;