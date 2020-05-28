import React from 'react';

// styles
import styles from '../Footer.module.scss';
import { NavLink } from 'react-router-dom';

const FooterTop = () => {
    return <div className={ styles.footer__top }>
        <ul className={ styles.footer__lists }>
            <li className={ styles.footer__lists_list }>
                <NavLink activeClassName={'active'} to="/privacy-policy">privacy policy</NavLink>
            </li>
            <li className={ styles.footer__lists_list }>
                <NavLink activeClassName={'active'} to="/terms-condidtions">terms & conditions</NavLink>
            </li>
            <li className={ styles.footer__lists_list }>
                <NavLink activeClassName={'active'} to="/child-safety-policy">child safety policy</NavLink>
            </li>
        </ul>
    </div>;
};

export default FooterTop;