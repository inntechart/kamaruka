import React from 'react';

// styles
import styles from '../Header.module.scss';
import {Link} from "react-router-dom";

const Logo = ({img}) => (
    <div className={styles.header__logo}>
        <Link to="/"> <img className={styles.header__logo_img} src={img} alt="Logo" /></Link>
    </div>
);

export default Logo;