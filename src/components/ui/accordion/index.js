import React, { useState, Fragment } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';

// styles
import styles from './Accordion.module.scss';

// components
import AccItem from './accItem';
import Arrows from '../arrows';


const Accordion = ({ items, heading, text, htext }) => {

    const [isAllShow, setIsAllShow] = useState(false);

    const handleShowAll = () => {
        setIsAllShow(!isAllShow);
    };

    return <div className={ styles.acc }>
        { heading ? <h3 className={ styles.acc_heading }>{ heading }</h3> : null }
        {htext ? <p>{htext}</p> : null}
        {text ? <p>{text}</p> : null}
        { items.map((item, index) => {
            return <Fragment key={index}>
                {item.heading ? <h4 className={styles.acc__item_heading}>{item.heading}</h4> : null}
                { item.items.map((item, index) => {
                    return <AccItem
                        isAllShow={isAllShow}
                        key={index}
                        title={item.title}
                        texts={item.texts}
                        table={item.table ? item.table : null}
                    />;
                }) }
            </Fragment>
        }) }
        <Arrows
            classnames={`tr`}
            img={ ArrowT }
            style={isAllShow ? {} : {transform: 'rotate(180deg)'}}
            text={isAllShow ? `COLLAPSE ALL` : `EXPAND ALL` }
            showMore={ handleShowAll }
        />
    </div>;
};

export default Accordion;

