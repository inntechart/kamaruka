import React from 'react';

// styles
import styles from './Button.module.scss';

const Button = ({children, style, classnames}) => {
    return <div style={{...style}} className={` ${styles.button} ${classnames}`}>
        {children}
    </div>
};

export default Button;