import React from 'react';

// styles
import styles from './Footer.module.scss';

// content
import FooterTop from './footerTop';
import FooterContent from './footerContent';

const Footer = () => {
    return <footer className={ styles.footer }>
        <FooterTop />
        <FooterContent />
    </footer>;
};

export default Footer;