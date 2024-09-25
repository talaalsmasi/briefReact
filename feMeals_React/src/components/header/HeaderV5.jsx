import React from 'react';
import MainMenu from './MainMenu';
import SidebarInfo from './SidebarInfo';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import useSearchBar from '@/hooks/useSearchBar';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderV5 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { openSearch, searchOpen, searchClose } = useSearchBar();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-box logo-less navbar-default validnavs ${isOpen ? "force-sticky navbar-responsive" : ""} ${openSearch ? "pause-sticked" : ""}`}>

                    <div className="top-search">
                        <div className="container-xl">
                            <form onSubmit={handleSearch}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Search" name='search' />
                                    <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times"></i></span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container nav-box d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/#">
                                <img src="/assets/img/logo-2.png" className="logo" alt="Logo" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                            <img src="/assets/img/logo-2.png" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times"></i>
                            </button>
                            <MainMenu navbarPlacement="navbar-right" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                        </div>
                        <SidebarInfo openInfoBar={openInfoBar} closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} searchOpen={searchOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV5;