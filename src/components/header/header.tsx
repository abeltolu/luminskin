import React from 'react';
import classnames from 'classnames';
import './header.scss';
import { NavMenu } from './navmenu/navmenu';
import { CartCount } from './cartcount/cartcount';
import useScroll from '../../hooks/usescroll';

interface IHeaderProps {
    isSticky?: boolean;
}
export const Header = ({ isSticky }: IHeaderProps) => {
    const { scrollY } = useScroll();
    const headerClass = classnames('header', {
        sticky: isSticky && scrollY >= 100, //show sticky class if isSticky and scroll position equals 100
    });
    return (
        <header className={headerClass}>
            <div className="header__left">
                <a href="/" className="logo">
                    <img src="/lumin-logo.png" alt="Lumin Logo" />
                </a>
                <NavMenu
                    links={[
                        { title: 'Shop', url: '/shop' },
                        { title: 'Learn', url: '/learn' },
                    ]}
                />
            </div>
            <div className="header__right">
                <NavMenu links={[{ title: 'Account', url: '/account' }]} />
                <CartCount count={20} />
            </div>
        </header>
    );
};
