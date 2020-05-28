import React, { useState } from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';

// styles
import styles from '../Staff.module.scss';

// components
import Arrows from '../../arrows';

const StaffMember = ({ img, name, major, founded, texts, position,
                         specialisation, training, diploma, post, isShowAllStaff }) => {

    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    const handleShowLess = () => {
        setIsShowMore(!isShowMore);
    };


    return <div className={ styles.employer }>
        <div className={ styles.employer_img }>
            <img src={ img } alt="Staff" />
        </div>
        <div className={ styles.employer__info }>
            <div className={ styles.employer__name_more }>
                <div className={ styles.employer_name }>
                    <p>{ name }</p>
                    <p>{ major }</p>
                </div>
                {isShowAllStaff || isShowMore ? <p>{ founded }</p> : <Arrows
                    showMore={ handleShowMore }
                    img={ ArrowT }
                    compStyle={ { position: 'static' } }
                    style={ { transform: 'rotate(180deg)' } }
                    spanStyle={ { width: '20px', height: '20px', marginBottom: '5px' } }
                    text={ 'MORE' } /> }
            </div>
            <div className={ `${ styles.employer__more } ${isShowAllStaff || isShowMore ? styles.employer__more_open : '' }` }>
                { texts.map((text, index) => {
                    return <p key={ index }>{ text }</p>;
                }) }
                <ul>
                    <span>{ position.title }</span>
                    { position.list.map((it, index) => <li key={ index }>{ it }</li>) }
                </ul>
                <ul>
                    <span>{ specialisation.title }</span>
                    { specialisation.list.map((it, index) => <li key={ index }>{ it }</li>) }
                </ul>
                <ul>
                    <span>{ training.title }</span>
                    { training.list.map((it, index) => <li key={ index }>{ it }</li>) }
                </ul>
                <ul>
                    <span>{ diploma.title }</span>
                    { diploma.list.map((it, index) => <li key={ index }>{ it }</li>) }
                </ul>
                <p>{ post }</p>
                <Arrows
                    showMore={ handleShowLess }
                    img={ ArrowT }
                    compStyle={ { bottom: '-70px', right: 'calc(50% - 12.5px)' } }
                    spanStyle={ { width: '20px', height: '20px', marginBottom: '5px' } }
                    text={ 'LESS' } />
            </div>
        </div>
    </div>;
};

export default StaffMember;