import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface MenuProps {
    children: React.ReactNode;
    isSticky?: boolean;
}

const Menu: React.FC<MenuProps> = ({children, isSticky}) => {
    return <nav className={isSticky ? cx('menu', 'menu-sticky') : cx('menu')}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    isSticky: PropTypes.bool,
};

export default Menu;
