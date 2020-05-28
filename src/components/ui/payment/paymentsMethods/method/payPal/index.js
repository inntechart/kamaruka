import React, { useState } from 'react';

// assets
import PPalImg from '../../../../../../assets/img/payments/ppal.png';
import ArrowT from '../../../../../../assets/icons/tArrow.svg';

// styles
import styles from './PayPal.module.scss';

// components
import Arrows from '../../../../arrows';
import PayLogo from './payLogo';
import { useWindowSize } from '../../../../../../hooks/useWindowSize';

const PayPal = ({isShowAll}) => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const showMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.payment }>
        <div className={ styles.payment__header }>
            <PayLogo
                showMore={size.width <= 768 ? showMore : null }
            />
            <div className={ `${ styles.payment__header_text } ${isShowAll || isShowMore ? styles.payment__header_hidden : '' }` }>
                <p>Provides options to pay annually, biannually and quarterly</p>
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
            <h5 className={ styles.payment__heading }>Pay Now</h5>
            <p className={ styles.payment__text }>Click amount to pay</p>
            <div className={ styles.payment__fees }>
                <div className={ styles.payment__fee }>
                    <p>Annual Fee</p>
                    <div className={ styles.payment__fee_value }>
                        <p>$11,000</p>
                    </div>
                </div>
                <div className={ styles.payment__fee }>
                    <p>Biannual Fee</p>
                    <div className={ styles.payment__fee_value }>
                        <p>$5,500</p>
                    </div>
                </div>
                <div className={ styles.payment__fee }>
                    <p>Quarterly Fee</p>
                    <div className={ styles.payment__fee_value }>
                        <p>$11,000</p>
                    </div>
                </div>
            </div>
            <div className={ styles.payment__btn }>
                <a href="/">
                    <span>Pay now with…</span>
                    <img src={ PPalImg } alt="PayPal Logo" />
                </a>
            </div>
            <div className={ styles.payment__info }>
                <p>Note: You will be redirected to the PayPal site to complete your payment</p>
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


export default PayPal;