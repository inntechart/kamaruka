import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './AssessmentSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const AssessmentSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            To be accepted in the program, students will need to have had a WISC-III
            (Intelligence test) administered by a psychologist or paediatrician.
        </p>
        <p>
            Arrangements can be made for boys to be tested through the school after enrolment.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                The Neale Analysis of Reading Ability and the Woodcock Reading
                Mastery Tests may be used to assess reading and comprehension standards.
            </p>
            <p>
                A Self-Description Questionnaire is used to measure areas of self-concept
                which need to be targeted for intervention.
            </p>
            <p>
                These scores are not only useful in identifying underlying reasons for problem
                behaviour, but also for highlighting areas of relative strength.
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

export default AssessmentSection;