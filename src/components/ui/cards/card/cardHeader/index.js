import React from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from '../../Cards.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';

// components
import Arrows from '../../../arrows';

const CardHeader = ({ term, termCubeTextStyle, startDay, endDay, cubeText, showMore, isShowAll, isShow }) => {

    const { size } = useWindowSize();

    return <div className={ styles.card__header }>
        <div className={ styles.card__start }>
            <div className={ styles.card__cube }>
                <span style={ { ...termCubeTextStyle } }>{ cubeText }</span>
            </div>
            <div className={ styles.card__start_start }>
                <span>Start</span>
                <p>{ startDay }</p>
                <span>End</span>
                <p>{ endDay }</p>
            </div>
        </div>
        <div className={ styles.card__term } style={isShowAll || isShow ? {alignSelf: 'center'} : {}}>
            { size.width > 768 ? <p>{ term }</p> : (isShowAll || isShow ? <p style={{ transform: 'rotate(-90deg)' }}>{ term }</p> : <Arrows
                img={ ArrowT }
                text={ 'MORE' }
                compStyle={ { position: 'static', alignSelf: 'center' } }
                spanStyle={ { marginBottom: '5px', width: '30px', height: '30px' } }
                style={ { transform: 'rotate(180deg)' } }
                showMore={ showMore }
            />) }
        </div>
    </div>;
};

export default CardHeader;

