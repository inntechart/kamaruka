import React from 'react';

// assets
import ArrowTop from '../../assets/icons/tArrow.svg';
import Teach from '../../assets/img/teach.png';
import Teach2 from '../../assets/img/teach2.png';
import DonateI from '../../assets/img/bank.png';
import Calendar from '../../assets/img/calendar.png';
import Annis from '../../assets/img/ann.png';
import Payments from '../../assets/img/payments.png';
import Logo from '../../assets/icons/logo.svg';

// styles
import styles from './Home.module.scss';
import './Home.scss';

// hooks
import { useWindowSize } from '../../hooks/useWindowSize';

// components
import Wrapper from '../wrapper';
import Arrows from '../ui/arrows';
import Donate from './donate';
import Term from './term';
import Anniversary from './anniversary';
import Strategy from './strategy';
import Careers from './careers';
import Contact from './contact';
import Welcome from './welcome';
import MobileContact from '../mobileContact';

const HomeContent = () => {

    const { size } = useWindowSize();

    return <main>
        <div className={ styles.home__content }>
            <Wrapper style={size.width <= 768 ? {width: '100%'} : {} }>
                <Welcome img={ Logo } />
                <Donate img={ Teach } img2={ Teach2 } img3={ DonateI } />
                <Term img={ Calendar } />
                <Anniversary img={ Annis } />
                <Strategy img={ Payments } />
                <Contact img={ Logo } />
                <Careers />
            </Wrapper>
            { size.width <= 768 ? <MobileContact /> : null }
            <Arrows
                compStyle={{right: '10%', bottom: 0}}
                img={ ArrowTop }
                goTo={ '#header' }
                text={ 'Top' }
            />
        </div>
    </main>;
};

export default HomeContent;