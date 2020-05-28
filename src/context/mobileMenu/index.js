import React, { useState } from 'react';

// context
import MobileMenuContext from './context';

const MobileMenuProvider = ({ children }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return <MobileMenuContext.Provider value={{
        openNav,
        isNavOpen,
        setIsNavOpen
    }}>
        { children }
    </MobileMenuContext.Provider>;
};

export default MobileMenuProvider;