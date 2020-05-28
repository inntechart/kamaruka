import React, { useState } from 'react';

// assets
import Arrows from '../../arrows';

// styles
import styles from '../Accordion.module.scss';

// components
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Table from '../../table';

const AccItem = ({ title, texts, isAllShow, table }) => {

    const [isShowText, setIsShowText] = useState(false);

    const handleShowText = () => {
        setIsShowText(!isShowText);
    };

    return <div className={ styles.acc_item }>
        <div className={ styles.acc_item_title_arr }>
            <h4>{ title }</h4>
            <div className={styles.acc_more}>
                <span style={isShowText || isAllShow ? {display: 'none'} : {}}>MORE</span>
                <Arrows
                    compStyle={ isShowText || isAllShow ? {
                        bottom: '30px',
                        right: 'calc(50% - 15px)'
                    } : { position: 'static' } }
                    spanStyle={ isShowText || isAllShow ? {
                        marginBottom: '10px',
                        width: '30px',
                        height: '30px'
                    } : { margin: 0, width: '30px', height: '30px' } }
                    style={ isShowText || isAllShow ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' } }
                    img={ ArrowT }
                    showMore={ handleShowText }
                    text={ isShowText || isAllShow ? 'LESS' : null }
                />
            </div>
        </div>
        { isShowText || isAllShow ? (<div className={ styles.acc__texts }>
            { texts.map((text, index) => {
                return <p className={ styles.acc__text } key={ index }>{ text }</p>;
            }) }
            { table ? <Table
                th={ table.th }
                th2={ table.th2 }
                title={ table.title }
                title2={ table.title2 }
                title3={ table.title3 }
                title4={ table.title4 }
                title5={ table.title5 }
                title6={ table.title6 }
                title7={ table.title7 }
                title8={ table.title8 }
                firstVal1={ table.firstVal1 }
                firstVal2={ table.firstVal2 }
                firstVal3={ table.firstVal3 }
                firstVal4={ table.firstVal4 }
                firstVal5={ table.firstVal5 }
                firstVal6={ table.firstVal6 }
                firstVal7={ table.firstVal7 }
                firstVal8={ table.firstVal8 }
                secondVal1={ table.secondVal1 }
                secondVal2={ table.secondVal2 }
                secondVal3={ table.secondVal3 }
                secondVal4={ table.secondVal4 }
                secondVal5={ table.secondVal5 }
                secondVal6={ table.secondVal6 }
                secondVal7={ table.secondVal7 }
                secondVal8={ table.secondVal8 }
                thl={ table.thl }
            /> : null }
        </div>) : null }
    </div>;
};

export default AccItem;