import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './IntroSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const IntroSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            Kamaruka Education Centre was founded in 2001 by the current principal, Alfonso Scibilia, to cater
            for a unique group of boys whose needs could not be accommodated in the mainstream classroom.
        </p>
        <p>
            The school’s original campus in Richmond operated for 12 years accommodating up to 20 students. In
            response to the growing demand for Kamaruka’s intervention program offered, the school relocated to
            a larger premises at 52 River Street South Yarra in 2013.
        </p>
        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Further growth saw the establishment of a second premises in 2017 for the Primary Annex at 38 River
                street – four doors down. Kamaruka Education Centre now offers its alternative intervention program
                for up to 60 students from years 3 to 10.
            </p>
            <p>
                The program offered at Kamaruka is designed for boys diagnosed with Attention Deficit Hyperactivity
                Disorder (ADHD), but can also benefit a select group of boys diagnosed with high functioning autism
                spectrum disorder (ASD), formerly known as Asperger’s.
            </p>
            <p>
                A commonality amongst these boys is the low self-esteem developed over several years of failure in
                mainstream schools.
            </p>
            <p>
                Their social inadequacies and emotional issues threaten their academic progress and social inclusion
                in our society.
            </p>
            <p>
                Through positive experiences and sense of belonging, self-esteem is restored and a pathway towards a
                rewarding career becomes achievable. Co-morbid disorders such as Oppositional Defiant Disorder (ODD)
                and Conduct Disorder (CD) often compromise their progress, as does the anxiety which many of these
                boys present with at enrolment.
            </p>
            <p>
                The word Kamaruka derives from an aboriginal term meaning “Camp of the spirit children”.
            </p>
            <p>
                The three arrows of the Kamaruka emblem symbolise the core values targeted in the social development
                of the students at Kamaruka which are:
            </p>
            <ul>
                <li>– Respect for self</li>
                <li>– Respect for others</li>
                <li>– Responsibility for one’s actions</li>
            </ul>
            <p>Our social skills and behavioural programs aim to promote these values.</p>
            <p>
                Kamaruka Education Centre is committed to providing the best environment for your son to maximise
                his potential.
            </p>
            <p>
                The school prides itself in its values-based school culture, which creates a safe and caring
                learning environment for students, staff and families.
            </p>
        </div>
        { size.width <= 768 ? <Arrows
            img={ ArrowT }
            showMore={ handleShowMore }
            text={isShowMore ? "LESS" : "MORE"}
            style={isShowMore ? {} : {transform: 'rotate(180deg)'}}
        /> : null }
    </div>;
};

export default IntroSection;