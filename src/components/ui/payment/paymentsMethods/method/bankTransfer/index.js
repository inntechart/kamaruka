import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../../assets/icons/tArrow.svg';

// styles
import styles from './BankTransfer.module.scss';

// hooks
import { useWindowSize } from '../../../../../../hooks/useWindowSize';

// components
import Arrows from '../../../../arrows';
import PayLogo from './payLogo';

const BankTransfer = ({isShowAll}) => {

    const {size} = useWindowSize();
    const [isShowMore, setIsShowMore] = useState(false);

    const showMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ `${styles.payment} ${size.width <= 758 && (isShowAll || isShowMore) ? styles.payment_border : ''}` }>
        <div className={ styles.payment__header }>
            <PayLogo
                showMore={size ? showMore : null}
            />
            <div className={ `${ styles.payment__header_text } ${isShowAll || isShowMore ? styles.payment__header_hidden : '' }` }>
                <p>Specify payment number for biannual and quarterly instalments</p>
            </div>
            <div className={ styles.payment__arrow }>
                <Arrows
                    compStyle={ isShowMore ? { display: 'none' } : { position: 'static' } }
                    spanStyle={ { width: '25px', height: '25px', marginBottom: '5px' } }
                    style={ { transform: 'rotate(180deg)' } }
                    img={ ArrowT }
                    text={ 'MORE' }
                    showMore={ showMore }
                />
            </div>
        </div>
        <div className={ `${ styles.payment__more } ${isShowAll || isShowMore ? styles.payment__more_visible : '' }` }>
            <p className={ styles.payment__text }>
                You can send fee payments via Bank Transfer (Direct Deposit)
                to Kamaruka Education Centre’s bank account as follows:
            </p>
            <div className={ styles.payment__account }>
                <div className={ styles.payment__account_info }>
                    <p>Account Name:</p>
                    <p>Kamaruka Payments</p>
                </div>
                <div className={ styles.payment__account_info }>
                    <p>BSB:</p>
                    <p>704191</p>
                </div>
                <div className={ styles.payment__account_info }>
                    <p>Account Number:</p>
                    <p>173560</p>
                </div>
            </div>
            <div className={ styles.payment__info }>
                <div>
                    <p className={ styles.payment__transaction_text }>Please use transaction reference:</p>
                    <p>
                        <strong>Fees</strong>
                        “yourname”
                        <strong>MMM</strong>
                        <span>(abbreviated month  e.g. NOV = November)</span>
                    </p>
                </div>
                <Arrows
                    compStyle={ { position: 'static' } }
                    spanStyle={ { width: '25px', height: '25px', marginBottom: '5px' } }
                    img={ ArrowT }
                    text={ 'LESS' }
                    showMore={ showMore }
                />
            </div>

        </div>
    </div>;
};


export default BankTransfer;