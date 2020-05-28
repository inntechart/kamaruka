import React, { useState } from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';

// hooks
import { useWindowSize } from '../../../../hooks/useWindowSize';

// components
import PayPal from './method/payPal';
import BankTransfer from './method/bankTransfer';
import Cheque from './method/cheque';
import Arrows from '../../arrows';

const DonatsMethods = ({title, text1, text2, payVia, direct}) => {

    const {size} = useWindowSize();
    const [isShowAll, setIsShowAll] = useState(false);

    const showAll = () => {
        setIsShowAll(!isShowAll);
    };

    return <div>
        <PayPal
            isShowAll={isShowAll}
            title={title}
            text1={text1}
            text2={text2}
            payVia={payVia}
        />
        <BankTransfer
            isShowAll={isShowAll}
            title={title}
            text1={text1}
            text2={text2}
            payVia={payVia}
            direct={direct}
        />
        <Cheque
            isShowAll={isShowAll}
            title={title}
            text1={text1}
            text2={text2}
            payVia={payVia}
        />
        {size.width <= 768 &&
        <Arrows
            img={ArrowT}
            style={isShowAll ? {} : {transform: 'rotate(180deg)'}}
            text={isShowAll ? "COLLAPSE ALL" : "EXPEND ALL"}
            showMore={showAll}
        />}
    </div>;
};


export default DonatsMethods;