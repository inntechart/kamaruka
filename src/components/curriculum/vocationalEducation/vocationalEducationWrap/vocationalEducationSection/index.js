import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './VocationEducationSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const VocationEducationSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            Career counselling is structured into the program for boys at year ten
            who are ready for transition to further education or the work force.
            Academically oriented students are prepared for VCE with instructions
            on appropriate subject selection for their chosen career path.
        </p>
        <p>
            Other students are steered towards an apprenticeship or pre-apprenticeship training course.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Liaising with a number of TAFE colleges, we are able to place students
                in a number of short transition courses one day per week throughout a term.
                This allows students to explore career options before making a commitment
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

export default VocationEducationSection;