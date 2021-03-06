import React from 'react';

// assets
import PPalImg from '../../../../../../../assets/img/payments/ppal.png';

// styles
import styles from '../PayPal.module.scss';

const PayLogo = ({showMore, payVia}) => {
    return <div className={ styles.payment__img } onClick={showMore}>
        <span>{payVia ? payVia : 'Donate via'}</span>
        <img src={ PPalImg } alt="PayPal Logo" />
    </div>;
};


export default PayLogo;