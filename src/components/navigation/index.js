import React, { useContext, useLayoutEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// assets
import Bg from '../../assets/img/section_bg.png';
import Bg2 from '../../assets/img/bg2.png';

// hooks
import { useWindowSize } from '../../hooks/useWindowSize';

// styles
import styles from './Navigation.module.scss';

// components
import NavItem from './navItem';

// context
import MobileMenuContext from '../../context/mobileMenu/context';

const about = [
    {
        title: 'Introduction',
        path: '/about/introduction',
    },
    {
        title: 'Mission Statement',
        path: '/about/mission-statement'
    },
    {
        title: 'School Performance',
        path: '/about/school-performance'
    },
    {
        title: 'Staff',
        path: '/about/staff'
    },
    {
        title: 'Committee',
        path: '/about/committee'
    },

];
const philosophy = [
    {
        title: 'Intervention program',
        path: '/philosophy/intervention-program'
    },
    {
        title: 'Classroom Strategies',
        path: '/philosophy/classroom-strategies'
    },
    {
        title: 'Physical Achievement',
        path: '/philosophy/physical-achievement'
    },
];
const curriculum = [
    {
        title: 'Focus',
        path: '/curriculum/focus'
    },
    {
        title: 'Program',
        path: '/curriculum/program'
    },
    {
        title: 'Assessment',
        path: '/curriculum/assessment'
    },
    {
        title: 'Vocational Education',
        path: '/curriculum/vocational-education'
    },
    {
        title: 'Term Dates',
        path: '/curriculum/term-dates'
    },
];
const approach = [
    {
        title: 'Foreword',
        path: '/approach/foreword'
    },
    {
        title: 'Behaviour Modification',
        path: '/approach/behaviour-modification'
    },
    {
        title: 'Policy',
        path: '/approach/policy'
    },
    {
        title: 'Medication',
        path: '/approach/medication'
    }
];
const enrolment = [
    {
        title: 'Intake',
        path: '/enrolment/intake'
    },
    {
        title: 'Process',
        path: '/enrolment/process'
    },
    {
        title: 'Fees & Bursaries',
        path: '/enrolment/fees-bursaries'
    }
];
const payments = [
    {
        title: 'Fees',
        path: '/payments/fees'
    },
    {
        title: 'Donations',
        path: '/payments/donations'
    },
];
const contact = [
    {
        title: 'Details',
        path: '/contact/details'
    },
    {
        title: 'Enquiry Form',
        path: '/contact/enquiry'
    },
    {
        title: 'Location',
        path: '/contact/location'
    },
];
const privacy = [
    {
        title: 'Privacy Policy',
        path: '/privacy-policy'
    },
    {
        title: 'Terms & Condidtions',
        path: '/terms-condidtions'
    },
    {
        title: 'Child Safety Policy',
        path: '/child-safety-policy'
    },
];
const navItems = [
    {
        title: 'About',
        path: '/about/',
        sublinks: [
            {
                title: 'Introduction',
                path: '/about/introduction',
            },
            {
                title: 'Mission Statement',
                path: '/about/mission-statement'
            },
            {
                title: 'School Performance',
                path: '/about/school-performance'
            },
            {
                title: 'Staff',
                path: '/about/staff'
            },
            {
                title: 'Committee',
                path: '/about/committee'
            },

        ]
    },
    {
        title: 'Philosophy',
        path: '/philosophy/',
        sublinks: [
            {
                title: 'Intervention program',
                path: '/philosophy/intervention-program'
            },
            {
                title: 'Classroom Strategies',
                path: '/philosophy/classroom-strategies'
            },
            {
                title: 'Physical Achievement',
                path: '/philosophy/physical-achievement'
            },
        ]
    },
    {
        title: 'Curriculum',
        path: '/curriculum/',
        sublinks: [
            {
                title: 'Focus',
                path: '/curriculum/focus'
            },
            {
                title: 'Program',
                path: '/curriculum/program'
            },
            {
                title: 'Assessment',
                path: '/curriculum/assessment'
            },
            {
                title: 'Vocational Education',
                path: '/curriculum/vocational-education'
            },
            {
                title: 'Term Dates',
                path: '/curriculum/term-dates'
            },
        ],
    },
    {
        title: 'Approach',
        path: '/approach/',
        sublinks: [
            {
                title: 'Foreword',
                path: '/approach/foreword'
            },
            {
                title: 'Behaviour Modification',
                path: '/approach/behaviour-modification'
            },
            {
                title: 'Policy',
                path: '/approach/policy'
            },
            {
                title: 'Medication',
                path: '/approach/medication'
            }
        ],
    },
    {
        title: 'Enrolment',
        path: '/enrolment/',
        sublinks: [
            {
                title: 'Intake',
                path: '/enrolment/intake'
            },
            {
                title: 'Process',
                path: '/enrolment/process'
            },
            {
                title: 'Fees & Bursaries',
                path: '/enrolment/fees-bursaries'
            }
        ],
    },
    {
        title: 'Payments',
        path: '/payments/',
        sublinks: [
            {
                title: 'Fees',
                path: '/payments/fees'
            },
            {
                title: 'Donations',
                path: '/payments/donations'
            },
        ],
    },
    {
        title: 'Contact',
        path: '/contact/',
        sublinks: [
            {
                title: 'Details',
                path: '/contact/details'
            },
            {
                title: 'Enquiry Form',
                path: '/contact/enquiry'
            },
            {
                title: 'Location',
                path: '/contact/location'
            },
        ],
    },
    {
        title: 'Home',
        path: '/home',
        sublinks: []
    },
];

const Navigation = () => {

    const { isNavOpen } = useContext(MobileMenuContext);
    const { size } = useWindowSize();
    const { pathname } = useLocation();
    const [submenu, setSubmenu] = useState([]);
    const [isSecure, setIsSecure] = useState(false);
    const [secure, setSecure] = useState({
        title: '',
        path: '',
    });

    useLayoutEffect(() => {

        if (size.width) {
            if (pathname.includes('about')) {
                setSubmenu(about);
            }
            if (pathname.includes('philosophy')) {
                setSubmenu(philosophy);
            }
            if (pathname.includes('curriculum')) {
                setSubmenu(curriculum);
            }
            if (pathname.includes('approach')) {
                setSubmenu(approach);
            }
            if (pathname.includes('enrolment')) {
                setSubmenu(enrolment);
            }
            if (pathname.includes('payments')) {
                setSubmenu(payments);
            }
            if (pathname.includes('contact')) {
                setSubmenu(contact);
            }
            if (pathname.includes('privacy') ||
                pathname.includes('cond') ||
                pathname.includes('child')
            ) {
                setSubmenu(privacy);
            }
            if (pathname.includes('/privacy-policy')) {
                setIsSecure(true);
                setSecure(prevState => ({
                    ...prevState,
                    title: 'Privacy Policy',
                    path: '/privacy-policy'
                }));
            } else if (pathname.includes('/terms-condidtions')) {
                setIsSecure(true);
                setSecure(prevState => ({
                    ...prevState,
                    title: 'Terms & Condidtions',
                    path: '/terms-condidtions'
                }));
            } else if (pathname.includes('/child-safety-policy')) {
                setIsSecure(true);
                setSecure(prevState => ({
                    ...prevState,
                    title: 'Child Safety Policy',
                    path: '/child-safety-policy'
                }));
            } else {
                setIsSecure(false);
            }
        }
    }, [setSubmenu, pathname, setIsSecure, setSecure, size]);

    return <nav className={ `${ styles.nav }` }>
        <div className={styles.nav_fixed}>
        <div
            className={ styles.nav_wrapper }
            style={ size.width <= 768 && !isNavOpen ? { display: 'none' } : { display: 'flex' } }
        >
            { navItems.map((navItem, index) => {
                return <NavItem
                    key={ index }
                    title={ navItem.title }
                    to={ navItem.path }
                    sublinks={ navItem.sublinks }
                />;
            }) }
        </div>
        <div
            className={ `${ styles.nav_wrapper }` }
            style={ size.width > 768 || isNavOpen ? { display: 'none' } : { display: 'block' } }
        >
            { isSecure ? <NavItem
                isSecure={ isSecure }
                title={ secure.title }
                to={ secure.path }
                style={ !pathname.includes(secure.path) ? { display: 'none' } : {} }
            /> : navItems.map((navItem, index) => {
                return <NavItem
                    key={ index }
                    title={ navItem.title }
                    to={ navItem.path }
                    style={ !pathname.includes(navItem.path) ? { display: 'none' } : {} }
                    sublinks={ navItem.sublinks }
                />;
            }) }
        </div>
        <div className={ styles.nav__submenu }>
            { size.width > 768 && pathname !== '/home' ? submenu.map((item, index) => {
                return <div
                    key={ index }
                    className={ `${ styles.nav__submenu_item } ` }
                >
                    <NavLink
                        exact
                        to={ item.path }
                        activeClassName="active_sub_navlink"
                    >
                        { item.title }
                    </NavLink>
                </div>;
            }) : null }
        </div>
        </div>
        <div className={ styles.nav_bg }
             style={ size.width > 768 ? { backgroundImage: `url(${ Bg })` } : { backgroundImage: `url(${ Bg2 })` } } />
    </nav>;
};
export default Navigation;
