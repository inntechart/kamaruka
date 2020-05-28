import React from 'react';

// assets
import Teach from '../../../../assets/img/teach.png';

// styles
import styles from '../Location.module.scss';

// components
import Square from '../../../ui/square';
import Cubes from '../../../cubes';
import Donations from '../../../ui/donations';
import Locations from '../../../ui/locations';
import Child from '../../../../assets/img/child.png';
import Comp from '../../../../assets/img/comp.png';
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Arrows from '../../../ui/arrows';

const LocationWrap = () => {
    return <div className={ styles.location }>
        <div className={ styles.location__intro }>
            <div className={ styles.location__descrs }>
                <h2 className={ styles.location_heading }>Location</h2>
                <Locations />
            </div>
        </div>
        <div className={ styles.location__intro }>
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
        <div className={ styles.location__intro }>
            <div className={ styles.location__cubes }>
                <Cubes />
            </div>
            <div className={ styles.location__donate }>
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

export default LocationWrap;