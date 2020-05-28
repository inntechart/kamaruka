import React from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Teach from '../../../../assets/img/teach.png';
import Ann from '../../../../assets/img/ann.png';
import Child from '../../../../assets/img/child.png';
import Comp from '../../../../assets/img/comp.png';

// resources
import {school} from '../../../../resources';

// styles
import styles from '../School.module.scss';

// components
import Square from '../../../ui/square';
import Donations from '../../../ui/donations';
import Cubes from '../../../cubes';
import Arrows from '../../../ui/arrows';
import Accordion from '../../../ui/accordion';




const SchoolIntro = () => {
    return <div className={ styles.school }>
        <div className={ styles.school__content }>
            <div className={ styles.school__texts }>
                <h2 className={ styles.school__content_heading }>School Performance</h2>
                <Accordion items={ school } heading="School Performance Report - 2018" />
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
            <Donations
                style={{maxHeight: '540px'}}
            />
        </aside>
        <Arrows
            img={ ArrowT }
            text="TOP"
            goTo={'#header'}
        />
    </div>;
};

export default SchoolIntro;