import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import CommitteeContent from '../../../components/about/committee';
import CommitteeHeading from '../../../components/about/committee/committeeContent/committeHeading';


const Committee = () => {
    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<CommitteeHeading />);
        }
    }, [size, setIsNavOpen, setContent]);



    return <main>
        { size.width > 768 ? <CommitteeContent /> : <MobileContact /> }
    </main>;
};

export default Committee;