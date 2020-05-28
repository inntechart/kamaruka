import React, { useState } from 'react';

// context
import { DonateContext } from './DonateContetx';

const DonateProvider = ({children}) => {

    const [isdonateOpen, setIsDonateOpen] = useState(false);

    return <DonateContext.Provider value={{
        isdonateOpen,
        setIsDonateOpen
    }}>
        {children}
    </DonateContext.Provider>
};

export default DonateProvider;