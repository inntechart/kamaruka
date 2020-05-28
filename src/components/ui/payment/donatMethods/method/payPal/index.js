import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// assets
import PPalImg from '../../../../../../assets/img/payments/ppal.png';
import ArrowT from '../../../../../../assets/icons/tArrow.svg';
import Close from '../../../../../../assets/icons/close.svg';

// styles
import styles from './PayPal.module.scss';

// components
import Arrows from '../../../../arrows';
import PayLogo from './payLogo';

const PayPal = ({ isShowAll, title, text1, text2, payVia }) => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { id } = useParams();

    const showMore = () => {
        setIsShowMore(!isShowMore);
    };


    return <div className={ styles.payment }>
        <div className={ styles.payment__header }>
            <PayLogo
                payVia={payVia}
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
            { !id ? <>
                <h5 className={ styles.payment__heading }>Donate Now</h5>
                <div className={ styles.payment__cost }>
                    <p className={ styles.payment__text }>Click pre-selected amount</p>
                    <div className={ styles.payment__constItems }>
                        <div>
                            <div className={ styles.payment__cost_item }>
                                <input type="radio" name="money" id="first" />
                                <label htmlFor="first">
                                    <span>$10</span>
                                </label>
                            </div>
                            <div className={ styles.payment__cost_item }>
                                <input type="radio" name="money" id="second" />
                                <label htmlFor="second">
                                    <span>$25</span>
                                </label>
                            </div>
                            <div className={ styles.payment__cost_item }>
                                <input type="radio" name="money" id="third" />
                                <label htmlFor="third">
                                    <span>$50</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className={ styles.payment__cost_item }>
                                <input type="radio" name="money" id="four" />
                                <label htmlFor="four">
                                    <span>$100</span>
                                </label>
                            </div>
                            <div className={ styles.payment__cost_item }>
                                <input type="radio" name="money" id="six" />
                                <label htmlFor="six">
                                    <span>$250</span>
                                </label>
                            </div>
                            <div className={ styles.payment__cost_item }>
                                <input type="radio" name="money" id="seven" />
                                <label htmlFor="seven">
                                    <span>$500</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.payment__inp }>
                        <p className={ `${ styles.payment__text }_` }>Or enter any amount</p>
                        <input type="text" placeholder="$" />
                    </div>
                </div>
            </> : <>
                <h5 className={ styles.payment__heading }>{title}</h5>
                <p style={ { fontSize: '14px' } }>{text1}</p>
            </> }
            { !id ? <div className={ styles.payment__btn }>
                <a href="/">
                    <span>Pay now with…</span>
                    <img src={ PPalImg } alt="PayPal Logo" />
                </a>
            </div> : null }
            <div className={ styles.payment__info }>
                { !id ?
                    <p>Note: You will be redirected to the PayPal site to complete your donation</p> :
                    <p style={ { fontStyle: 'normal', marginTop: '15px' } }>{text2}</p>
                }
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
                    showMore={ showMore } />}
            </div>
        </div>
    </div>;
};


export default PayPal;