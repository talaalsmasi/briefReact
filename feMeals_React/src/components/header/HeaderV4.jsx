import React from 'react';
import MainMenu from './MainMenu';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderV4 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav nav-top-margin navbar-sticky navbar-default validnavs navbar-fixed white no-background nav-border ${isOpen ? "force-sticky navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/#">
                                <img src="/assets/img/logo-light.png" className="logo logo-display" alt="Logo" />
                                <img src="/assets/img/logo.png" className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>

                        <div className="nav-item-box d-flex justify-content-between align-items-center">
                            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                                <img src="/assets/img/logo.png" alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                    <i className="fa fa-times"></i>
                                </button>
                                <MainMenu navbarPlacement="navbar-right" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                            </div>
                            <div className="attr-right">
                                <div className="attr-nav">
                                    <ul>
                                        <li className="button"><Link to="/contact#">Reservation</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;