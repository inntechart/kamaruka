import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './FucusSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const FocusSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            Despite an average or above average IQ, the boys referred to Kamaruka
            usually have a history of repeated failures at school. To guarantee the
            experience of academic success and consequently relinquish their negativity
            towards scholastic competence, the academic curriculum focuses on literacy and numeracy.
        </p>
        <p>
            Written language, reading comprehension and mathematics make up the foundation
            of all other subjects. Excellence in these subjects enhances self-image and is
            vital to successful inclusion. An integrated curriculum caters for the slower
            learning rates, inattentiveness and distractibility of adolescents with ADHD.
        </p>
        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Students are challenged according to their ability level rather
                than age or year of schooling. To restore the often damaged and very
                low self-concept exhibited by these children, the curriculum at Kamaruka
                is deliberately weighted towards physical achievement.
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

export default FocusSection;