import React from 'react';
import {Link} from "react-router-dom";

// assets
import Comp from '../../../assets/img/comp.png';

// styles
import './Welcome.scss';

// components
import Square from '../../ui/square';

const Welcome = ({ img }) => {
    return <div className={ `welcome` }>
        <div className={ `welcome_content` }>
            <h3>Welcome To</h3>
            <div className={ `welcome_img` }>
                <img src={ img } alt="Logo" />
                <h2><Link to="/">Kamaruka</Link></h2>
                <p>Education Center</p>
            </div>
            <p>The Kamaruka Education Centre is an independent intervention school with a modified curriculum for boys
                who have difficulty coping with the demands of mainstream school due to learning difficulties,
                behavioural, social, and or emotional issues.
            </p>
            <p>
                Kamaruka is one of a few places that provides an opportunity to successfully continue at school in a
                positive and nurturing environment.
            </p>
            <a href="/" onClick={e => e.preventDefault()}>Read More</a>
        </div>
        <Square routeTo={'/enrolment/process'} classname={ `after lightblue` } style={ { backgroundImage: `url(${ Comp })` } }>
            <h3>Enrolment
                <br />
                Process</h3>
        </Square>
    </div>;
};

export default Welcome;