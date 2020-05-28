import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './PhysicalAchievement.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const PhysicalAchievementSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            At Kamaruka, we adopt a cognitive-behavioural approach in our behaviour
            modification program, with the view of instilling long lasting management
            skills that will enable the students to function in the wider society.
        </p>
        <p>
            Since athletic ability is so highly prized by peers and society alike,
            it follows that self-esteem would improve with significant advances in physical
            performance. Consequently, the Kamaruka intervention program relies heavily on
            physical achievement as a springboard to academic success.
        </p>


        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Since athletic ability is so highly prized by peers and society alike,
                it follows that self-esteem would improve with significant advances in
                physical performance. Consequently, the Kamaruka intervention program relies
                heavily on physical achievement as a springboard to academic success.
            </p>
        </div>
        { size.width <= 768 ? <Arrows
            img={ ArrowT }
            showMore={ handleShowMore }
            text={ isShowMore ? 'LESS' : 'MORE' }
            style={ isShowMore ? {} : { transform: 'rotate(180deg)' } }
        /> : null }
    </div>;
};

export default PhysicalAchievementSection;