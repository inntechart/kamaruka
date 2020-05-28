import React from 'react';

// styles
import styles from '../Header.module.scss';
import {Link} from "react-router-dom";

const Title = () => (
    <div className={styles.header__title}>
        <h1 className={styles.header__title_heading}><Link to="/">kamaruka</Link></h1>
        <span className={styles.header__title_text}>education center</span>
    </div>
);

export default Title;