import React, { useState, Fragment, useContext } from 'react';

// styles
import styles from './Donations.module.scss';

// context
import { DonateContext } from '../../../context/donateOpen/DonateContetx';

// components
import Button from '../button';

// line
const lines = [
    {
        line: [
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
            '', '', '', '', '',
        ],
        texts: ['5m', '10m', '15m', '20m', '25m'],
    }

];

const texts = [
    'We are saving to', 'buy our own', 'premises but we',
    'premises but we', 'need your help!', 'Kamaruka is a',
    'registered  charity, so', 'your donation is a tax',
    'deductible expense', 'which means you can',
    'reduce your taxable', 'income and lower', 'your tax bill.'
];

const Donations = ({style, colbStyle}) => {

    const {setIsDonateOpen, isdonateOpen} = useContext(DonateContext);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const openMoreInfo = () => {
        setIsMoreOpen(!isMoreOpen);
        setIsDonateOpen(!isdonateOpen)
    };

    return <div className={ styles.donations } style={!isMoreOpen ? {...style} : {}}>
        <h4 className={ styles.donations_heading }>Donations</h4>
        <div className={ styles.donations__content }>
            <div className={ `${ styles.donations__texts } ${ isMoreOpen ? styles.open : '' }` }>
                { texts.map((text, index) => {
                    return <p key={ index }>{ text }</p>;
                }) }
            </div>
            <div className={ styles.donations__money } style={{...colbStyle}}>
                <div className={ styles.donations__money_lines }>
                    { lines.map((line, index) => {
                        return <Fragment key={index}>
                            {line.texts ? line.texts.map((t, index) => {
                                return <span key={index}>{t}</span>
                            }) : null}
                            { line.line ? line.line.map((l, index) => {
                                return <div key={ index } className={ styles.donations__money_line }>{ l }</div>;
                            }) : null}
                        </Fragment>;
                    }) }
                    <span>$</span>
                </div>
                <div className={ styles.donations__money_colb }>
                    <div className={ styles.donations__money_colb_inner }></div>
                </div>
            </div>
        </div>
        <span onClick={ openMoreInfo } className={ styles.donations_more }>
            {isMoreOpen ? 'LESS' : 'MORE...'}
        </span>
        <Button style={ { height: '40px', backgroundColor: '#5CA100', cursor: 'pointer' } }>Click to make a Donation</Button>
    </div>;
};

export default Donations;