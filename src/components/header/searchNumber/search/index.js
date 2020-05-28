import React from 'react';

// styles
import styles from '../../Header.module.scss';

const Search = ({icon}) => (
    <div className={styles.header__sp_search} >
        <input type="search" name="search" placeholder="Search" />
        <img src={icon} alt="Search" />
    </div>
);

export default Search;