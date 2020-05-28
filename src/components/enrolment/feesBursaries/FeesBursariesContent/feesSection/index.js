import React, { useState } from 'react';

// assets
import ArrowT from '../../../../../assets/icons/tArrow.svg';

// styles
import styles from './FeesSection.module.scss';

// hooks
import { useWindowSize } from '../../../../../hooks/useWindowSize';


// components
import Arrows from '../../../../ui/arrows';

const FeesSection = () => {

    const [isShowMore, setIsShowMore] = useState(false);
    const { size } = useWindowSize();

    const handleShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return <div className={ styles.content }>
        <p>
            The school fees include registration and grading fees for the Martial Arts,
            as well as the cost of the four camps. Parents are asked to contribute $50
            towards each camp for food supplies. The school will supply exercise books
            as well as other reading materials. Boys will be expected to join their
            local libraries to extend their access to novels and research materials.
        </p>
        <p>
            Kamaruka is a non-profit independent school. Fees are
            reviewed annually by the Committee of Management.
        </p>


        <div
            className={ `${ styles.content__hidden } ${ isShowMore ? styles.content__show : '' }` }
        >
            <p>
                Single low-income parents may qualify for funding to reduce fees below 50%.
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

export default FeesSection;