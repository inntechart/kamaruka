import React from 'react';

// assets
import SearchIcon from '../../../assets/icons/search.svg';

// styles
import styles from '../Contact.module.scss';

const Search = () => {
    return <div className={ styles.contact__search }>
        <label className={ styles.contact__search_inp }>
            <input type="text" placeholder="Search" />
            <img src={ SearchIcon } alt="Search" />
        </label>
    </div>;
};

export default Search;