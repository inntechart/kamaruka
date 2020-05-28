import React from 'react';

// styles
import styles from './Table.module.scss';

const Table = ({ th, th2, title, title2, title3, title4, title5, title6, title7, title8,
                   firstVal1, firstVal2, firstVal3, firstVal4, firstVal5, firstVal6, firstVal7, firstVal8,
                   secondVal1, secondVal2, secondVal3, secondVal4, secondVal5, secondVal6, secondVal7, secondVal8, thl
}) => {
    return <div className={ styles.table }>
        <table className={ styles.table_table }>
            <tbody>
            <tr>
                <th>{thl}</th>
                <th>&nbsp;</th>
                <th className={ styles.table_right }>{ th }</th>
                <th className={ styles.table_right }>{ th2 }</th>
            </tr>
            <tr>
                <td>{ title }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal1}</td>
                <td className={ styles.table_right }>{secondVal1}</td>
            </tr>
            <tr>
                <td>{ title2 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal2}</td>
                <td className={ styles.table_right }>{secondVal2}</td>
            </tr>
            <tr>
                <td>{ title3 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal3}</td>
                <td className={ styles.table_right }>{secondVal3}</td>
            </tr>
            <tr>
                <td>{ title4 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal4}</td>
                <td className={ styles.table_right }>{secondVal4}</td>
            </tr>
            <tr>
                <td>{ title5 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal5}</td>
                <td className={ styles.table_right }>{secondVal5}</td>
            </tr>
            <tr>
                <td>{ title6 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal6}</td>
                <td className={ styles.table_right }>{secondVal6}</td>
            </tr>
            <tr>
                <td>{ title7 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal7}</td>
                <td className={ styles.table_right }>{secondVal7}</td>
            </tr>
            <tr>
                <td>{ title8 }</td>
                <td>&nbsp;</td>
                <td className={ styles.table_right }>{firstVal8}</td>
                <td className={ styles.table_right }>{secondVal8}</td>
            </tr>
            </tbody>
        </table>
    </div>;
};

export default Table;