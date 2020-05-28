import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MissionContent from '../../../components/about/missionStatement';
import MobileContact from '../../../components/mobileContact';
import MissionSection from '../../../components/about/missionStatement/missionContent/missionSection';


const MissionStatement = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<MissionSection />);
        }
    }, [size, setIsNavOpen, setContent]);


    return <main>
        { size.width > 768 ? <MissionContent /> : <MobileContact /> }
    </main>;
};

export default MissionStatement;