import React from 'react';

// assets
import Annis from '../../../../assets/img/ann.png';
import Teach from '../../../../assets/img/teach.png';
import Child from '../../../../assets/img/child.png';
import Comp from '../../../../assets/img/comp.png';

// styles
import styles from '../Staff.module.scss';

// components
import Square from '../../../ui/square';
import Cubes from '../../../cubes';
import Donations from '../../../ui/donations';
import StaffMembers from '../../../ui/staffMemers';
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Arrows from '../../../ui/arrows';


const StaffWrap = () => {
    return <div className={ styles.staff }>
        <div className={ styles.staff__intro }>
            <div className={ styles.staff__descrs }>
                <h2 className={ styles.staff_heading }>Staff</h2>
                <div className={ `${ styles.staff__descr } ${ styles.mission_texts }` }>
                    <p>Kamaruka ensures that up to-date teaching methodologies are utilised, and modifies
                        programs to meet individual needs.</p>
                    <p>
                        Staff are encouraged to participate in professional development
                        seminars enabling them to be informed of the most effective teaching practices,
                        innovative educational programs and medical research findings.
                    </p>
                    <p>
                        The Principal, Mr. Alfonso Scibilia, has over 25 years of teaching experience.
                        Since 1995, Mr. Scibilia has been involved in the development of teaching strategies
                        and behavioural programs for children with Attention Deficit Hyperactivity Disorder (ADHD),
                        Oppositional Defiant Disorder (ODD) and Conduct Disorder (CD).
                    </p>
                </div>
            </div>
            <div className={ styles.staff__side }>
                <Square classname={ `contain` }>
                    <img src={ Annis } alt="Ann" />
                </Square>
            </div>
        </div>
        <div className={styles.staff__members}>
            <h3>Staff Members</h3>
            <StaffMembers />
        </div>
        <div className={ styles.staff__intro }>
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
        <div className={ styles.staff__intro }>
            <div className={styles.staff__cubes}>
                <Cubes />
            </div>
            <div className={styles.staff__donate}>
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

export default StaffWrap;