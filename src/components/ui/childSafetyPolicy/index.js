import React, { useState } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';

// styles
import styles from './TermsCondidtions.module.scss';

// components
import Arrows from '../arrows';

const ChildSafetyPolicy = () => {

    const [isShowMore, setIsShowMore] = useState(false);

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.child } >
        <div className={ styles.child_showed }>
            <div className={ styles.child__item }>
                <h3>COMMITMENT TO CHILD SAFETY</h3>
                <p>
                    Kamaruka Education Centre is committed to safety and wellbeing of
                    all children and young people. This will be the primary focus of
                    our care and decision-making. Kamaruka Education
                    Centre has zero tolerance for child abuse.
                </p>
            </div>
            <div className={ styles.child__item }>
                <p>
                    Kamaruka Education Centre is committed to providing a child safe
                    environment where children and young people are safe and feel safe,
                    and their voices are heard about decisions that affect their lives.
                    Particular attention will be paid to the cultural safety of Aboriginal
                    children and children from culturally and/or linguistically diverse backgrounds,
                    as well as the safety of children with a disability.
                </p>
            </div>
        </div>
        <div className={ `${ styles.child_hidden } ${ isShowMore ? styles.child_visible : '' }` }>
            <div className={ styles.child__item }>
                <p>
                    Every person involved in Kamaruka Education Centre has a responsibility to understand the important
                    and specific role he/she plays individually and collectively to ensure
                    that the wellbeing and safety of all
                    children and young people is at the forefront of all they do and every
                    decision they make.In addition, the
                    Statement of Commitment may describe the school’s principles for child safety.
                </p>
                <p>
                    “In its planning, decision-making and operations Kamaruka Education Centre will:
                </p>
            </div>
            <div className={ styles.child__item }>
                <ul className={styles.child__list}>
                    <li>1.  Take a preventative, proactive and participatory approach to child safety;</li>
                    <li>2.  Value and empower children to participate in decisions which affect their lives;</li>
                    <li>
                        3.  Foster a culture of openness that supports all persons to
                        safely disclose risks of harm to children
                    </li>
                    <li>
                        4.  Respect diversity in cultures and child rearing
                        practices while keeping child safety paramount;
                    </li>
                    <li>
                        5.  Provide written guidance on appropriate conduct and behaviour towards children;
                    </li>
                    <li>
                        6.  Engage only the most suitable people to work with
                        children and have high quality staff and volunteer
                        supervision and professional development;
                    </li>
                    <li>
                        7.  Ensure children know who to talk with if they are
                        worried or are feeling unsafe, and that they are
                        comfortable and encouraged to raise such issues;
                    </li>
                    <li>
                        8.  Report suspected abuse, neglect or mistreatment promptly to the appropriate authorities;
                    </li>
                    <li>
                        9.  Share information appropriately and lawfully
                        with other organisations where the safety and wellbeing
                        of children is at risk; and
                    </li>
                    <li>
                        10.  Value the input of and communicate regularly with families and carers.
                    </li>
                </ul>
            </div>
        </div>
        <Arrows
            img={ ArrowT }
            style={ isShowMore ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' } }
            text={ isShowMore ? 'LESS' : 'MORE' }
            showMore={ handleShowMore }
        />
    </div>;
};

export default ChildSafetyPolicy;