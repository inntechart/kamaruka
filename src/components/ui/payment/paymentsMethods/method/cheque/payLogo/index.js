import React from 'react';

// assets
import ChequeImg from '../../../../../../../assets/img/payments/Cheque.png';

// styles
import styles from '../Cheque.module.scss';

const PayLogo = ({showMore}) => {
    return <div className={ styles.payment__img } onClick={showMore}>
        <span>Pay via</span>
        <img src={ ChequeImg } alt="Cheque Logo" />
    </div>;
};


export default PayLogo;