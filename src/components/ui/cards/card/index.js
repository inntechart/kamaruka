import React from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';

// styles
import styles from '../Cards.module.scss';

// hooks
import { useWindowSize } from '../../../../hooks/useWindowSize';


// components
import CardHeader from './cardHeader';
import CardInfo from './cardInfo';
import Arrows from '../../arrows';


const Card = ({ cardStyle, term, termCubeTextStyle, startDay, endDay, infos, cubeText, isShowAll, isShow, showMore }) => {

    const { size } = useWindowSize();

    return <div
        style={isShowAll || isShow ? { ...cardStyle, paddingBottom: '100px' } : { ...cardStyle }  }
        className={ styles.card }
    >
        <CardHeader
            term={ term }
            termCubeTextStyle={ termCubeTextStyle }
            startDay={ startDay }
            endDay={ endDay }
            cubeText={ cubeText }
            showMore={ showMore }
            isShowAll={ isShowAll }
            isShow={ isShow }
        />
        <div className={ `${ styles.card_wrap__infos } ${ isShow || isShowAll ? styles.card__wrap__infos_open : '' }` }>
            { infos.map((info, index) => {
                return <div key={ index } className={ styles.card__infos }>
                    <CardInfo info={ info.info } />
                </div>;
            }) }
        </div>
        {size.width <= 768 ? (isShowAll || isShow ? <Arrows
            img={ ArrowT }
            text={ 'LESS' }
            compStyle={ { bottom: '10px', right: 'calc(50% - 15px)' } }
            spanStyle={ { marginBottom: '5px', width: '30px', height: '30px' } }
            style={ { transform: 'rotate(0eg)' } }
            showMore={ showMore }
        /> : null) : null }
    </div>;
};



export default Card;
