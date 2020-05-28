import React from 'react';

// assets
import ArrowT from '../../../../assets/icons/tArrow.svg';
import Teach from '../../../../assets/img/teach.png';

// styles
import styles from '../EnquiryForm.module.scss';

// resources
import { process } from '../../../../resources/index';

// components
import Square from '../../../ui/square';
import Donations from '../../../ui/donations';
import Cubes from '../../../cubes';
import Arrows from '../../../ui/arrows';
import Accordion from '../../../ui/accordion';
import Ann from '../../../../assets/img/ann.png';
import Child from '../../../../assets/img/child.png';
import Comp from '../../../../assets/img/comp.png';


const EnquiryWrap = () => {
    return <div className={ styles.enquiry }>
        <div className={ styles.enquiry__content }>
            <div className={ styles.enquiry__texts }>
                <h2 className={ styles.enquiry__content_heading }>Enquiry Form</h2>
                <Accordion
                    items={ process }
                    htext={ `Kamaruka Education Centre strives to make education 
                    accessible to boys with ADHD using a fair, consistent and 
                    transparent approach to the implementation of our enrolment process.` }
                    text={ `We are not always be able to accept every family who applies depending on 
                    their level of disability and also upon availability of places. If places are limited, 
                    your son will be added to the waiting list in which vacancies tend to open up frequently 
                    as a result of student numbers fluctuating more often throughout the year.` }
                />
            </div>
            <Cubes />
        </div>
        <aside>
            <Square classname={ `contain pages` } style={ { minHeight: '330px', maxHeight: '330px', marginTop: '10px' } }>
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
                colbStyle={{height: '60%'}}
            />
        </aside>
        <Arrows
            img={ ArrowT }
            text="TOP"
            goTo={'#header'}
        />
    </div>;
};

export default EnquiryWrap;