import React from 'react';

// styles
import styles from '../Footer.module.scss';

const FooterContent = () => {
    return <div className={styles.footer__content}>
        <div className={styles.footer_copyright}>
            <p>Kamaruka is a registered charity listed under the Australian Charities and Not-for-profits Commission (ACNC)
                <span> | </span>   <br/>  <span>ABN: 82 267 854 859</span></p>
            <p>Copyright © Kamaruka Inc 2000 - 2020</p>
        </div>
        <div className={styles.footer_corp}>
            <p>uxdesign.melbourne</p>
        </div>
    </div>
};

export default FooterContent;