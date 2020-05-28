import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// assets
import ArrowT from '../../../../../../assets/icons/tArrow.svg';
import Close from '../../../../../../assets/icons/close.svg';


// styles
import styles from './Cheque.module.scss';

// hooks
import { useWindowSize } from '../../../../../../hooks/useWindowSize';

// components
import Arrows from '../../../../arrows';
import PayLogo from './payLogo';

const Cheque = ({ isShowAll, title, text1, text2, payVia }) => {

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
                <p>Please make cheque payable to:</p>
                <p><strong>Kamaruka Inc</strong></p>
                <p>Drop cheque off in person to main office or mail to:</p>
                <ul>
                    <li><strong>Business Manager</strong></li>
                    <li><strong>Kamaruka Education Centre</strong></li>
                    <li><strong>PO Box 6086</strong></li>
                    <li><strong>Chapel Street North</strong></li>
                    <li><strong>South Yarra VIC 3141</strong></li>
                </ul>
            </> : <p className={styles.payment__thank_heading}>{title}</p> }
            <div className={ styles.payment__info }>
                {!id ? <p>
                    Please make sure to place your return address on the envelope/
                    covering letter so that we can send you a receipt of your donation.
                </p> : <div className={styles.payment__thank}>
                    <p className={styles.payment__thank_text}>{text1}</p>
                    <p className={styles.payment__thank_text}>{text2}</p>
                </div>}
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


export default Cheque;