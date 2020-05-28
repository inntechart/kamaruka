import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import FeesContent from '../../../components/payments/fees';
import FeesSection from '../../../components/payments/fees/feesWrap/feesSection';

const Fees = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<FeesSection />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <FeesContent /> : <MobileContact /> }
    </main>;
};

export default Fees;