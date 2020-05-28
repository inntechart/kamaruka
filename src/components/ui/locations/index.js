import React, { useState } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';

// styles
import styles from './Locations.module.scss';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';

// components
import Location from './location';
import Arrows from '../arrows';

const location1 = ['38-40 River Street', 'South Yarra VIC 3141', 'Australia'];
const location2 = ['52 River Street', 'South Yarra VIC 3141', 'Australia'];

const Locations = () => {

    const {size} = useWindowSize();
    const [isShowAll, setIsShowAll] = useState(false);

    const handleShowAll = () => {
        setIsShowAll(!isShowAll);
    };


    return <div className={styles.locations}>
        <Location
            texts={location1}
            title={"Primary School"}
            style={size.width <= 768 ? {backgroundColor: '#B8E986'} : {}}
            size={size}
            isShowAll={isShowAll}
        />
        <Location
            texts={location2}
            title={"Secondary School"}
            style={size.width <= 768 ? {backgroundColor: '#A5CEFF'} : {}}
            size={size}
            isShowAll={isShowAll}
        />
        {size.width <= 768 ? <Arrows
            showMore={handleShowAll}
            img={ArrowT}
            style={isShowAll ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}}
            text={isShowAll ? "COLLAPSE ALL" : "EXPEND ALL"}
            compStyle={{bottom: '10px'}}
            isShowAll={isShowAll}
        /> : null}
    </div>
};

export default Locations;