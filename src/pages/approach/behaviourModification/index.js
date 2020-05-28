import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import BehaviourModificationContent from '../../../components/approach/behaviourModification';
import MobileContact from '../../../components/mobileContact';
import ModificationSection
    from '../../../components/approach/behaviourModification/behaviourModificationContent/modificationSection';

const BehaviourModification = () => {

    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<ModificationSection />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <BehaviourModificationContent /> : <MobileContact /> }
    </main>;
};

export default BehaviourModification;