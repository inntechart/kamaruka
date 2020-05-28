import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './InterventionProgram.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const InterventionProgramSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>The intervention program at Kamaruka, proposes to address
            the social/ emotional problems as well as the academic and behavioural
            problems often exhibited by the students enrolled, enabling inclusion into
            mainstream education after approximately two years.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Since a number of referrals to Kamaruka exhibit ADHD symptoms,
                the program is designed to minimise the impact of this disorder on
                educational progress. Adopting a multi-modal approach, the teachers
                collaborate with both professionals and parents to increase on-task behaviour,
                reduce aggression, and to improve academic and behavioural performance.
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

export default InterventionProgramSection;