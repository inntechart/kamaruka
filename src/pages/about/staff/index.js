import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import StaffContent from '../../../components/about/staff';
import StaffMembers from '../../../components/ui/staffMemers';

const Staff = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<StaffMembers />);
        }
    }, [size, setIsNavOpen, setContent]);


    return <main>
        { size.width > 768 ? <StaffContent /> : <MobileContact /> }
    </main>;
};

export default Staff;