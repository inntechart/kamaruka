import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../context/mobileMenu/context';
import SubmenuContentContext from '../../context/submenuContent/context';

// components
import MobileContact from '../../components/mobileContact';
import TermsContent from '../../components/termsCondidtions';
import TermsCondidtionsUi from '../../components/ui/termsCondidtions';

const TermsCondidtions = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<TermsCondidtionsUi />);
        }
    }, [setIsNavOpen, setContent, size]);


    return <main>
        { size.width > 768 ? <TermsContent /> : <MobileContact /> }
    </main>;
};

export default TermsCondidtions;