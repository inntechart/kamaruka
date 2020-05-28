import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './MissionSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const MissionSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>Kamaruka is committed to promoting the principles and practice of Australian democracy.</p>
        <p>
            The social skills and behavioural programs promote the values of openness and tolerance, freedom
            of
            speech and association, freedom of religion and equal rights.
        </p>
        <p>
            The teachings at Kamaruka support an elected government and the rule of law.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                The social skills and behavioural programs promote the values of openness and tolerance, freedom
                of
                speech and association, freedom of religion and equal rights.
            </p>
        </div>
        { size.width <= 768 ? <Arrows
            img={ ArrowT }
            showMore={ handleShowMore }
            text={isShowMore ? "LESS" : "MORE"}
            style={isShowMore ? {} : {transform: 'rotate(180deg)'}}
        /> : null }
    </div>;
};

export default MissionSection;