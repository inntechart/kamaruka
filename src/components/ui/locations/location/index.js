import React, { useState } from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';

// styles
import styles from '../Locations.module.scss';
import Arrows from '../../arrows';


const Location = ({ title, texts, style, size, isShowAll }) => {

    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.location }
                style={ isShowMore || isShowAll ? { ...style, paddingBottom: '100px' } : { ...style } }>
        <div className={ styles.location__titles } style={ isShowMore ? { paddingBottom: '20px' } : {} }>
            <div>
                <h3>{ title }</h3>
                { texts.map((text, index) => {
                    return <p key={ index }>{ text }</p>;
                }) }
            </div>
            { size.width <= 768 ? (isShowAll || isShowMore ? null : <Arrows
                img={ ArrowT }
                compStyle={ { position: 'static' } }
                spanStyle={ { marginBottom: '5px' } }
                style={ { transform: 'rotate(180deg)' } }
                text={ 'OPEN MAP' }
                showMore={ handleShowMore }
            />) : null }
        </div>
        <div
            className={ `${ styles.location__map } ${ isShowMore || isShowAll ? styles.location__map_open : '' }` }>&nbsp;</div>
        { size.width <= 768 ? (isShowMore || isShowAll ? <Arrows
            img={ ArrowT }
            compStyle={ { bottom: '10px' } }
            spanStyle={ { marginBottom: '5px' } }
            text={ 'CLOSE MAP' }
            showMore={ handleShowMore } /> : null) : null }
    </div>;
};

export default Location;

