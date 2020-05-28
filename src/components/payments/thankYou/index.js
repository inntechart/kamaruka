import React from 'react';

// styles

// components
import DonatsMethods from '../../ui/payment/donatMethods';

const ThankYou = ({title, text1, text2, payVia, direct}) => {
    return <div>
        <DonatsMethods
            title={title}
            text1={text1}
            text2={text2}
            payVia={payVia}
            direct={direct}
        />
    </div>;
};

export default ThankYou;