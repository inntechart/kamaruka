import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// resources
import { school } from '../../../resources';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import SchoolContent from '../../../components/about/school';
import Accordion from '../../../components/ui/accordion';


const School = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const {setContent} = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<Accordion items={ school } heading="School Performance Report - 2018" />)
        }
    }, [size, setIsNavOpen, setContent]);


    return <main>
        {size.width > 768 ? <SchoolContent /> : <MobileContact />}
    </main>
};

export default School;