import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import PhysicalAchievementContent from '../../../components/philosophy/physicalAchievement';
import PhysicalAchievementSection
    from '../../../components/philosophy/physicalAchievement/physicalAchievementContent/physicalAchievementSection';

const ClassroomStrategies = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<PhysicalAchievementSection />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <PhysicalAchievementContent /> : <MobileContact /> }
    </main>;
};

export default ClassroomStrategies;