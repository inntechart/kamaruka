import React from 'react';
import { useHistory } from "react-router-dom";
// styles
import styles from './Square.module.scss';
import './Square.scss';

const Square = ({ children, style, classname, routeTo }) => {
    let history = useHistory();

    const changeRoute = () =>{
        if(routeTo)
            history.push(routeTo);
    };

    return <div onClick={changeRoute} className={ `${ styles.square } ${classname}` } style={ { ...style } }>
        { children }
    </div>;
};

export default Square;