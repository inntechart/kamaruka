import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './ClassroomStrategiesSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const ClassroomStrategiesSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            Classroom strategies adopted are sensitive to the disabilities associated with this
            disorder, particularly to hyperactivity, impulsivity, and distractibility.
            The intervention program emphasises towards physical achievement
            as a springboard to academic success.
        </p>
        <p>
            Expectations are clear and firm and all activities are designed to be
            slightly beyond comfort level at all times. The strict parameters within which
            the student must operate allows every individual to feel safe, accepted and valued.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Empowerment and self-determination is the ultimate goal that we strive
                for as educators of any student with a learning disability. Self-image
                is crucial to the attainment of this goal and warrants greater priority
                when developing any educational program addressing the characteristics
                interfering with the learning process
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

export default ClassroomStrategiesSection;