import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// components
import IntroductionContent from '../../../components/about/introduction';
import MobileContact from '../../../components/mobileContact';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import IntroSection from '../../../components/about/introduction/intro/introSection';

const Introduction = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const {setContent} = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<IntroSection/>)
        }
    }, [size, setIsNavOpen, setContent]);


    return <main>
        { size.width > 768 ? <IntroductionContent /> : <MobileContact /> }
    </main>;
};

export default Introduction;