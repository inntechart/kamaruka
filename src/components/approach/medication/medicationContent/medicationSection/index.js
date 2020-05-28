import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './MedicationSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const MedicationSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            Research consistently shows that medication improves sustained attention,
            impulse control, activity level, disruptive behaviour,
            compliance, work completion, and work accuracy.
        </p>
        <p>
            However, boys on medication when enrolled may have their dosage reduced,
            after consultation with health professionals and parents, if the
            structured program that Kamaruka offers
            successfully meets the student’s learning needs.
        </p>
        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                There is some scientific evidence and a lot of anecdotal
                evidence suggesting that exercise increases the production
                of neurotransmitters – a boost similar to that caused by
                stimulant medication and lasting three hours or more.
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

export default MedicationSection;