import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// styles
import styles from '../Navigation.module.scss';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';

// context
import MobileMenuContext from '../../../context/mobileMenu/context';
import SubmenuContentContext from '../../../context/submenuContent/context';

// components
import SubmenuItemContent from './submenuContent';

const NavItem = ({ title, to, sublinks, style, isSecure }) => {

    const { pathname } = useLocation();
    const { size } = useWindowSize();
    const { isNavOpen } = useContext(MobileMenuContext);
    const {content} = useContext(SubmenuContentContext);

    return <div className={ styles.nav__items } style={ { ...style } }>
        <NavLink to={ to } activeClassName={ `active_navlink` }>
            { title }
        </NavLink>
        {isSecure ? <SubmenuItemContent>
            {content}
        </SubmenuItemContent> : null}
        { sublinks && (size.width <= 768 && !isNavOpen) ?
            sublinks.map((item, index) => {
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
                    <SubmenuItemContent
                        style={!pathname.includes(item.path) ? {display: 'none'} : {}}
                    >
                        {content}
                    </SubmenuItemContent>
                </div>;
            })
            : null }

    </div>;
};


export default NavItem;

