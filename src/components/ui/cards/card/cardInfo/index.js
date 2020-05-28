import React from 'react';

// styles
import styles from '../../Cards.module.scss';

const CardInfo = ({info}) => {
    return <div className={styles.card__info}>
        {info.map((item, index) => {
            return <div key={index}>
                <h5>{item.title}</h5>
                <h6>{item.subTitle}</h6>
                {item.texts.map((text, index) => <p key={index}>{text}</p>)}
            </div>
        })}
    </div>
};

export default CardInfo;