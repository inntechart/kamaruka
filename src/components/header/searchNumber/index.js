import React, { useContext } from 'react';

// assets
import SearchIcon from '../../../assets/icons/search.svg';

// styles
import styles from '../Header.module.scss';

// components
import Phone from './phone';
import Search from './search';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';

const SearchNumber = () => {

    const {openNav, isNavOpen} = useContext(MobileMenuContext);

    return <div className={ styles.header__sp }>
        <Phone />
        <Search icon={SearchIcon} />
        <button className={styles.header_btn} onClick={openNav}>{isNavOpen ? 'close' : 'menu'}</button>
    </div>;
};

export default SearchNumber;