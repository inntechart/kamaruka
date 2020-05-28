import React, { useContext, useEffect } from 'react';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useWindowScrollTo } from '../../../hooks/useWindowScrollTo';

// resources
import { process } from '../../../resources';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import MobileContact from '../../../components/mobileContact';
import ProcessContent from '../../../components/enrolment/process';
import Accordion from '../../../components/ui/accordion';

const Process = () => {


    const { setIsNavOpen } = useContext(MobileMenuContext);
    const { setContent } = useContext(SubmenuContentContext);
    const { size } = useWindowSize();

    useWindowScrollTo();

    useEffect(() => {
        if (size.width <= 768) {
            setIsNavOpen(false);
            setContent(<Accordion
                items={ process }
                htext={ `Kamaruka Education Centre strives to make education accessible to boys 
                    with ADHD using a fair, consistent and transparent approach to 
                    the implementation of our enrolment process.` }
                text={ `We are not always be able to accept every family who applies depending on 
                    their level of disability and also upon availability of places. If places are limited, 
                    your son will be added to the waiting list in which vacancies tend to open up frequently 
                    as a result of student numbers fluctuating more often throughout the year.` }
            />);
        }
    }, [size, setIsNavOpen, setContent]);

    return <main>
        { size.width > 768 ? <ProcessContent /> : <MobileContact /> }
    </main>;
};

export default Process;