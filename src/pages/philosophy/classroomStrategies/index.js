import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import {useWindowScrollTo} from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import ClassrommStrategiesContent from '../../../components/philosophy/classroomStrategies';
import ClassroomStrategiesSection
    from '../../../components/philosophy/classroomStrategies/classroomStrategiesContent/classroomStrategiesSection';

const ClassroomStrategies = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<ClassroomStrategiesSection />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <ClassrommStrategiesContent /> : <MobileContact /> }
    </main>;
};

export default ClassroomStrategies;