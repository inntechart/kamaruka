import React from 'react';

// styles
import styles from '../Contact.module.scss';
import Button from '../../ui/button';

const Numbers = () => {
    return <div className={ styles.numbers }>
        <h5 className={styles.numbers_heading}>Phone</h5>
        <div className={ styles.numbers__items }>
            <div className={ styles.numbers__items_item }>
                <p>Australia</p>
                <p><a href="tel:03 9826 0330">03 9826 0330</a></p>
            </div>
            <div className={ styles.numbers__items_item }>
                <p>International</p>
                <p><a href="tel:+61398260330">+61 3 9826 0330</a></p>
            </div>
        </div>
        <Button style={{backgroundColor: '#5CA100', height: '40px'}}>
            <a href="tel:03 9826 0330">03 9826 0330</a>
        </Button>
    </div>;
};

export default Numbers;