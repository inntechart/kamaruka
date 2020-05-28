import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './ModificationSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const ModificationSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            As most of the students referred to Kamaruka have a history of behavioural
            problems, a major component of teacher energy is channelled into our behaviour
            modification program. Using a cognitive-behavioural approach, teachers constantly
            challenge unacceptable behaviours and offer alternative management strategies
            to deal with problems in a more socially acceptable manner.
        </p>
        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                ADHD and comorbid disorders interfere not only with the
                educational and social success of the individual, but can
                have a devastating impact on the parents’ relationship, the
                family dynamics and society. In an attempt to address this problem,
                a ‘Home Behaviour Report Form’ is issued on a weekly basis for parents
                to identify home situations causing difficulties, so teachers can counsel
                students and offer strategies for change. The Principal is available for
                guidance and advice to both students and parents during and after school hours.
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

export default ModificationSection;