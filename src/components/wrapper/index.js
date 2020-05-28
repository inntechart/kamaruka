import React from 'react';

// styles
import styles from './Wrapper.module.scss';

const Wrapper = ({ children, style }) => (
    <div className={ styles.wrapper } style={{...style}}>
        { children }
    </div>
);

export default Wrapper;