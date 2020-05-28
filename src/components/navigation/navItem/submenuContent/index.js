import React from 'react';

// styles
import styles from '../../Navigation.module.scss';

const SubmenuItemContent = ({style, children}) => {
    return <div
                className={ `${ styles.submenu__contnet }` }
                style={{...style}}
            >
        {children}
    </div>
};


export default SubmenuItemContent;