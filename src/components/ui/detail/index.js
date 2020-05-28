import React from 'react';

// styles
import styles from './Detail.module.scss';

const Detail = () => {
    return <div className={ styles.detail }>
        <div className={ styles.detail__items }>
            <div className={ styles.detail__item }>
                <h3>Phone</h3>
                <div className={ styles.detail__info }>
                    <div className={ styles.detail__info_item }>
                        <span>Australia</span>
                        <span><a href="tel:03 9826 0330">03 9826 0330</a></span>
                    </div>
                    <div className={ styles.detail__info_item }>
                        <span>International</span>
                        <span><a href="tel:+61 3 9826 0330">+61 3 9826 0330</a></span>
                    </div>
                </div>
            </div>
            <div className={ styles.detail__item }>
                <h3>Address</h3>
                <div className={ styles.detail__info }>
                    <div className={ styles.detail__info_item }>
                        <h4>Primary School</h4>
                        <p>38-40 River Street</p>
                        <p>South Yarra VIC 3141</p>
                        <p>Australia</p>
                    </div>
                    <div className={ styles.detail__info_item }>
                        <h4>Secondary School</h4>
                        <p>52 River Street</p>
                        <p>South Yarra VIC 3141</p>
                        <p>Australia</p>
                    </div>
                </div>
            </div>
            <div className={ styles.detail__item }>
                <h3>Address</h3>
                <a className={styles.detail__item_link} href="maito:info@kamaruka.vic.edu.au">info@kamaruka.vic.edu.au</a>
            </div>
        </div>
    </div>;
};

export default Detail;