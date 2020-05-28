import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './ForewordSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const ForewordSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            A student who suffers from ADHD or other comorbid disorders may
            present a devastating impact on the parents’ relationship, the
            family dynamics and society in general. While others may give up
            refuse to help, Kamaruka’s approach towards the students’ success is
            one of a long-term project, aimed towards problem solving and social skills training.
        </p>
        <p>
            Our staff is committed and dedicated towards this goal, and encourages both
            professionals and parents to work cooperatively and communicate freely.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                This holistic approach ensures an un-biased and fresh
                approach towards the students’ educational and social success.
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

export default ForewordSection;