import React from 'react';

// styles
import styles from './Arrow.module.scss';

const Arrows = ({img, text, goTo, showMore, style, compStyle, spanStyle, classnames}) => {

    return <div onClick={showMore} className={ `${styles.arrows} ${classnames ? styles.tr : ''}` } style={{...compStyle}}>
        <a href={goTo}>
                        <span style={{...spanStyle}}>
                            <img src={ img } style={{...style}} alt="Arrow" />
                        </span>
            <span>{text}</span>
        </a>
    </div>;
};

export default Arrows;