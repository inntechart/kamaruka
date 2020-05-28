import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import InterventionProgramContent from '../../../components/philosophy/interventionProgram';
import InterventionProgramSection
    from '../../../components/philosophy/interventionProgram/interventionProgramContent/interventionProgramSection';

const MissionStatement = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<InterventionProgramSection />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <InterventionProgramContent /> : <MobileContact /> }
    </main>;
};

export default MissionStatement;