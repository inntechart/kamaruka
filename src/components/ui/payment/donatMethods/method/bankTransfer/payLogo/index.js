import React from 'react';

// assets
import BankTr from '../../../../../../../assets/img/payments/BankTransfer.png';

// styles
import styles from '../BankTransfer.module.scss'

const PayLogo = ({showMore, payVia, direct}) => {
    return <div className={ styles.payment__img } onClick={showMore}>
        <span>{payVia ? payVia : 'Donate via'}</span>
        <img src={ BankTr } alt="BankTransfer Logo" />
        <span>{direct ? direct : 'Direct Deposit'}</span>
    </div>;
};


export default PayLogo;