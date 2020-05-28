import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../context/mobileMenu/context';
import SubmenuContentContext from '../../context/submenuContent/context';

// components
import MobileContact from '../../components/mobileContact';
import ChildSafetyPolicyContent from '../../components/childSafetyPolicy';
import ChildSafetyPolicyUi from '../../components/ui/childSafetyPolicy';

const ChildSafetyPolicy = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<ChildSafetyPolicyUi />);
        }
    }, [size, setContent, setIsNavOpen]);


    return <main>
        { size.width > 768 ? <ChildSafetyPolicyContent /> : <MobileContact /> }
    </main>;
};

export default ChildSafetyPolicy;