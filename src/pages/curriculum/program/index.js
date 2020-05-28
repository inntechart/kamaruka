import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// resources
import { program } from '../../../resources';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import ProgramContent from '../../../components/curriculum/program';
import Accordion from '../../../components/ui/accordion';

const Program = () => {

    const { setIsNavOpen, isNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<Accordion items={ program } htext={ `Students are challenged according to 
                their ability level rather than age or year of schooling. To restore the 
                often damaged and very low self-concept exhibited by these children, 
                the curriculum at Kamaruka is deliberately weighted towards physical achievement.` } />);
        }
    }, [size, setIsNavOpen, setContent]);

    useEffect(() => {
        if (isNavOpen || !isNavOpen) {
            window.scrollTo(0, 650);
        }
    }, [isNavOpen]);

    return <main>
        { size.width > 768 ? <ProgramContent /> : <MobileContact /> }
    </main>;
};

export default Program;