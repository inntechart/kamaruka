import React from 'react';

// assets
import Teach from '../../assets/img/child.png';
import Cal from '../../assets/img/calendar.png';
import Pay from '../../assets/img/payments.png';

// styles
import styles from './Cubes.module.scss';


const Cubes = () => {



    return <div className={ styles.cube_items }>
        <div
            style={  { backgroundImage: `url(${ Teach })` } }
            className={ `${ styles.cube_items_item } ${ styles.cb_after }` }
        >
            <h3> Here to Help </h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3> Our <br/> Strategy </h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3> Modified Curriculum </h3>
            <p>Tailored for each student</p>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3> Literacy <br/> Intervention </h3>
        </div>
        <div
            style={  { backgroundImage: `url(${ Cal })` } }
            className={ `${ styles.cube_items_item } ${ styles.cb_after }` }
        >
            <h3> Term <br/> Dates </h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3> ADHD & ASD </h3>
            <p>Self-management <br/> for success</p>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3>Results</h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3>Enquiry <br/> Form</h3>
        </div>
        <div
            style={  { backgroundImage: `url(${ Pay })` } }
            className={ `${ styles.cube_items_item } ${ styles.cb_after }` }
        >
            <h3> Payments </h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3>Careers</h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3>Map</h3>
        </div>
        <div
            style={{ backgroundColor: '#4A4A4A' } }
            className={ `${ styles.cube_items_item } ` }
        >
            <h3>Contact</h3>
        </div>
    </div>;
};

export default Cubes;


/*
*  if you need this section dynamic use this code
* /
 */
// const [cbs, setCbs] = useState([]);
//
// useEffect(() => {
//     setCbs(cubes.flat(cubes.length));
// }, []);
// { cbs.map((cb, index) => {
//     return <div key={ index }
//                 style={ cb.img ? { backgroundImage: `url(${ cb.img })` } : { backgroundColor: '#4A4A4A' } }
//                 className={`${styles.cube_items_item} ${cb.img ? styles.cb_after : ''}`}
//     >
//         <h3>{ cb.title }</h3>
//         {cb.text ? (<p>{cb.text}</p>) : null}
//     </div>;
// }) }