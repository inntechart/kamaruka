import React from 'react';

// assets
import ArrowT from '../../assets/icons/tArrow.svg';

// styles
import styles from './Contact.module.scss';

// components
import Search from './search';
import Wrapper from '../wrapper';
import Numbers from './numbers';
import Addresses from './addresses';
import Enquiry from './enquiry';
import Arrows from '../ui/arrows';

const MobileContact = () => {
    return <div className={ styles.contact }>
        <Search />
        <Wrapper>
            <h4 className={ styles.contact_heading }>Contact</h4>
            <Numbers />
            <Addresses />
            <Enquiry />
            <Arrows
                img={ArrowT}
                text="TOP"
                goTo="#header"
            />
        </Wrapper>
    </div>;
};

export default MobileContact;