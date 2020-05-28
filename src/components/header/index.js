import React from 'react';

// assets
import LogoImg from '../../assets/icons/logo.svg';

// styles
import styles from './Header.module.scss';

// components
import Logo from './logo';
import Title from './title';
import SearchNumber from './searchNumber';

const Header = () => {
    return <header className={ styles.header } id="header">
        <div className={styles.header_wrapper}>
            <Logo img={ LogoImg } />
            <Title />
            <SearchNumber />
        </div>
    </header>;
};

export default Header;