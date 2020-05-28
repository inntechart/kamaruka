import React from 'react';

// assets
import Annis from '../../../../assets/img/ann.png';
import Teach from '../../../../assets/img/teach.png';

// styles
import styles from '../interventionProgram.module.scss';

// components
import Square from '../../../ui/square';
import Cubes from '../../../cubes';
import Donations from '../../../ui/donations';
import InterventionProgramSection from './interventionProgramSection';
import Child from '../../../../assets/img/child.png';
import Comp from '../../../../assets/img/comp.png';
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Arrows from '../../../ui/arrows';

const ProgramWrap = () => {
    return <div className={ styles.program }>
        <div className={ styles.program__intro }>
            <div className={ styles.program__descrs }>
                <h2 className={ styles.program_heading }>Intervention Program</h2>
                <div className={ `${ styles.program__descr } ${ styles.program_texts }` }>
                    <InterventionProgramSection />
                </div>
            </div>
            <div className={ styles.program__side }>
                <Square classname={ `contain` } style={{maxHeight: '330px'}}>
                    <img src={ Annis } alt="Ann" style={{width: '90%'}} />
                </Square>
            </div>
        </div>
        <div className={ styles.program__intro }>
            <Square classname={ `after green` } style={ { backgroundImage: `url(${ Child })`, width: '33%' } }>
                <h3>Here to Help</h3>
                <p>Positive choice change</p>
            </Square>

            <Square routeTo={'/enrolment/process'} classname={ `after lightblue` } style={ { backgroundImage: `url(${ Comp })`, width: '33%' } }>
                <h3>Enrolment <br />
                    Process</h3>
            </Square>

            <Square routeTo={'/philosophy/intervention-program'} classname={ `after orange` } style={ { backgroundImage: `url(${ Teach })`, width: '33%' } }>
                <h3>
                    Intervention <br/>
                    Program
                </h3>
            </Square>
        </div>
        <div className={ styles.program__intro }>
            <div className={styles.program__cubes}>
                <Cubes />
            </div>
            <div className={styles.program__donate}>
                <Donations />
            </div>
        </div>
        <Arrows
            img={ ArrowT }
            text="TOP"
            goTo={'#header'}
        />
    </div>;
};

export default ProgramWrap;