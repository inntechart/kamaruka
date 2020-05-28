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

const PaymentsMethods = () => {

    const {size} = useWindowSize();
    const [isShowAll, setIsShowAll] = useState(false);

    const showAll = () => {
        setIsShowAll(!isShowAll);
    };

    return <div>
        <PayPal isShowAll={isShowAll}/>
        <BankTransfer isShowAll={isShowAll}/>
        <Cheque isShowAll={isShowAll}/>
        {size.width <= 768 &&
        <Arrows
            img={ArrowT}
            style={isShowAll ? {} : {transform: 'rotate(180deg)'}}
            text={isShowAll ? "COLLAPSE ALL" : "EXPEND ALL"}
            showMore={showAll}
        />}
    </div>;
};


export default PaymentsMethods;