import React from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Teach from '../../../../assets/img/teach.png';
import Child from '../../../../assets/img/child.png';
import Ann from '../../../../assets/img/ann.png';
import Comp from '../../../../assets/img/comp.png';


// styles
import styles from '../Introduction.module.scss';

// context
// import { DonateContext } from '../../../../context/donateOpen/DonateContetx';

// components
import Square from '../../../ui/square';
import Donations from '../../../ui/donations';
import Cubes from '../../../cubes';
import Arrows from '../../../ui/arrows';
import IntroSection from './introSection';

const Intro = () => {

    // const {isdonateOpen} = useContext(DonateContext);

    return <div className={ styles.intro } >
        <div className={ styles.intro__content }>
            <div className={ styles.intro__texts }>
                <h2 className={ styles.intro__content_heading }>Introduction</h2>
                <IntroSection />
            </div>
            <Cubes />
        </div>
        <aside>
            <Square classname={ `contain pages` } style={ { minHeight: '330px', maxHeight: '330px' } }>
                <img style={ { width: '90%' } } src={ Ann } alt="20 Year" />
            </Square>
            <Square classname={ `after green` } style={ { backgroundImage: `url(${ Child })`, minHeight: '330px' } }>
                <h3>Here to Help</h3>
                <p>Positive choice change</p>
            </Square>
            <Square routeTo={'/enrolment/process'} classname={ `after lightblue` } style={ { backgroundImage: `url(${ Comp })`, minHeight: '330px' } }>
                <h3>Enrolment <br />
                    Process</h3>
            </Square>
            <Square routeTo={'/philosophy/intervention-program'} classname={ `after orange` } style={ { backgroundImage: `url(${ Teach })`, minHeight: '330px' } }>
                <h3>
                    Intervention <br/>
                    Program
                </h3>
            </Square>
            <Donations />
        </aside>
        <Arrows
            img={ ArrowT }
            goTo={'#header'}
            text="TOP" />
    </div>;
};

export default Intro;