import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../context/mobileMenu/context';
import SubmenuContentContext from '../../context/submenuContent/context';

// components
import MobileContact from '../../components/mobileContact';
import PrivacyPolicyContent from '../../components/privacyPolicy';
import PrivacyPolicyUi from '../../components/ui/privacyPolicy';

const PrivacyPolicy = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<PrivacyPolicyUi />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <PrivacyPolicyContent /> : <MobileContact /> }
    </main>;
};

export default PrivacyPolicy;