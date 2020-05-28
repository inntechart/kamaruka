import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// assets
import ArrowT from '../../../../../../assets/icons/tArrow.svg';

// styles
import styles from './BankTransfer.module.scss';

// hooks
import { useWindowSize } from '../../../../../../hooks/useWindowSize';

// components
import Arrows from '../../../../arrows';
import PayLogo from './payLogo';
import Close from '../../../../../../assets/icons/close.svg';

const BankTransfer = ({ isShowAll, title, text1, text2, payVia, direct }) => {

    const { size } = useWindowSize();
    const { id } = useParams();
    const [isShowMore, setIsShowMore] = useState(false);

    const showMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div
        className={ `${ styles.payment } ${ size.width <= 758 && (isShowAll || isShowMore) ? styles.payment_border : '' }` }>
        <div className={ styles.payment__header }>
            <PayLogo
                payVia={ payVia }
                direct={ direct }
                showMore={ showMore }
            />
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
        <div className={ `${ styles.payment__more } ${ isShowAll || isShowMore ? styles.payment__more_visible : '' }` }>
            { !id ? <><p className={ styles.payment__text }>
                You can send fee payments via Bank Transfer (Direct Deposit)
                to Kamaruka Education Centre’s bank account as follows:
            </p>
                <div className={ styles.payment__account }>
                    <div className={ styles.payment__account_info }>
                        <p>Account Name:</p>
                        <p>Kamaruka Inc. Scholarship Fund</p>
                    </div>
                    <div className={ styles.payment__account_info }>
                        <p>BSB:</p>
                        <p>704191</p>
                    </div>
                    <div className={ styles.payment__account_info }>
                        <p>Account Number:</p>
                        <p>210521</p>
                    </div>
                </div>
            </> : <p className={ styles.payment__thank_heading }>{ title }</p> }
            <div className={ styles.payment__info }>
                { !id ? <div>
                    <p className={ styles.payment__transaction_text }>Please use transaction reference:</p>
                    <p>
                        <strong>Fees</strong>
                        “yourname”
                        <strong>MMM</strong>
                        <span>(abbreviated month  e.g. NOV = November)</span>
                    </p>
                </div> : <div>
                    <p className={ `${ styles.payment__transaction_text } ${styles.payment__thank_text}` }>{ text1 }</p>
                    <p className={ `${ styles.payment__transaction_text } ${styles.payment__thank_text}` }>{ text2 }</p>
                </div> }
                { !id ? <Arrows
                    compStyle={ { position: 'static' } }
                    spanStyle={ { width: '25px', height: '25px', marginBottom: '5px' } }
                    img={ ArrowT }
                    text={ 'LESS' }
                    showMore={ showMore }
                /> : <Arrows
                    compStyle={ { position: 'static' } }
                    spanStyle={ { width: '25px', height: '25px', marginBottom: '5px' } }
                    img={ Close }
                    text={ 'CLOSE' }
                    showMore={ showMore } /> }
            </div>

        </div>
    </div>;
};


export default BankTransfer;