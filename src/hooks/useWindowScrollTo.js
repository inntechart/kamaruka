import { useCallback, useContext, useEffect } from 'react';

// context
import MobileMenuContext from '../context/mobileMenu/context';

export const useWindowScrollTo = () => {
    const {  isNavOpen } = useContext(MobileMenuContext);

    const x = useCallback(() => {
        if(isNavOpen || !isNavOpen) {
            window.scrollTo(0, 650);
        }
    }, [isNavOpen]);

    useEffect(() => {
        x();
    }, [x]);
};