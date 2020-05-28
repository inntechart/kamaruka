import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './IntakeSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const IntakeSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            Enrolment numbers are limited to optimise teacher effectiveness.
            The school can cater for up to 35 students with a ratio of two staff
            for every 8 to 10 students. Provided that places are available, enrolments
            will be accepted throughout the school year.
        </p>
        <p>
            New Enrolments <br />
            Parents considering enrolling their son are encouraged to make an appointment
            to visit the school and discuss the program’s suitability for their son’s needs.
        </p>

        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                A trial period / assessment over 3 days will determine whether enrolment is recommended.
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

export default IntakeSection;