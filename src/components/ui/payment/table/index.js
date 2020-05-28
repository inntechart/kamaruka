import React from 'react';

// styles
import styles from './Table.module.scss';

// hooks
import { useWindowSize } from '../../../../hooks/useWindowSize';

const Table = ({
                   style,
                   fRowStyles,
                   sRowStyles,
                   headerStyles,
                   titleStyle,
                   headingTitle,
                   headingTitle2,
                   headingTitle3,
                   headingTitle4,
                   title,
                   fItem1,
                   fItem2,
                   fItem3,
                   fItem4,
                   sItem1,
                   sItem2,
                   sItem3,
                   sItem4

               }) => {

    const { size } = useWindowSize();

    return <div className={ styles.table } style={ { ...style } }>
        { size.width > 768 ? <>
            <div className={ styles.table__header }>
                <div className={ `${ styles.table__row }  ${ styles.table__row_1 }` } style={ { ...headerStyles } }>
                </div>
                <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...headerStyles } }>
                    { headingTitle }
                </div>
                <div className={ `${ styles.table__row }  ${ styles.table__row_1 }` } style={ { ...headerStyles } }>
                    { headingTitle2 }
                </div>
                <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...headerStyles } }>
                    { headingTitle3 }
                </div>
                <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...headerStyles } }>
                    { headingTitle4 }
                </div>
            </div>
            <div className={ styles.table__body }>
                <div className={ `${ styles.table__col } ${ styles.table__col_title }` } style={ { ...titleStyle } }>
                    <p>{ title }</p>
                </div>
                <div className={ styles.table__col }>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_1 }` } style={ { ...fRowStyles } }>
                        <p>{ fItem1 }</p>
                    </div>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...sRowStyles } }>
                        <p>{ sItem1 }</p>
                    </div>
                </div>
                <div className={ styles.table__col }>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_1 }` } style={ { ...fRowStyles } }>
                        <p>{ fItem2 }</p>
                    </div>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...sRowStyles } }>
                        <p>{ sItem2 }</p>
                    </div>
                </div>
                <div className={ styles.table__col }>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_1 }` } style={ { ...fRowStyles } }>
                        <p>{ fItem3 }</p>
                    </div>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...sRowStyles } }>
                        <p>{ sItem3 }</p>
                    </div>
                </div>
                <div className={ styles.table__col }>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_1 }` } style={ { ...fRowStyles } }>
                        <p>{ fItem4 }</p>
                    </div>
                    <div className={ `${ styles.table__row }  ${ styles.table__row_2 }` } style={ { ...sRowStyles } }>
                        <p>{ sItem4 }</p>
                    </div>
                </div>
            </div>
        </> : <div className={ styles.table__m }>
            <div className={ styles.table__m_header } style={ { ...titleStyle } }>
                { title }
            </div>
            <div className={ styles.table__m_body }>
                <div style={ { ...fRowStyles } }>
                    <div className={ styles.table__m_body_item }>
                        <p>{ headingTitle }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...fRowStyles } }>
                        <p>{ fItem1 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...sRowStyles } }>
                        <p>{ sItem1 }</p>
                    </div>
                </div>
                {fItem2 ? <div style={ { ...fRowStyles } }>
                    <div className={ styles.table__m_body_item }>
                        <p>{ headingTitle2 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...fRowStyles } }>
                        <p>{ fItem2 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...sRowStyles } }>
                        <p>{ sItem2 }</p>
                    </div>
                </div> : null}
                {fItem3 ? <div style={ { ...fRowStyles } }>
                    <div className={ styles.table__m_body_item }>
                        <p>{ headingTitle3 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...fRowStyles } }>
                        <p>{ fItem3 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...sRowStyles } }>
                        <p>{ sItem3 }</p>
                    </div>
                </div> : null}
                {fItem4 ? <div style={ { ...fRowStyles } }>
                    <div className={ styles.table__m_body_item }>
                        <p>{ headingTitle4 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...fRowStyles } }>
                        <p>{ fItem4 }</p>
                    </div>
                    <div className={ styles.table__m_body_item } style={ { ...sRowStyles } }>
                        <p>{ sItem4 }</p>
                    </div>
                </div> : null}
            </div>
        </div> }

    </div>;
};

export default Table;