import React from 'react';
import FooterRowContent from './FooterRowContent';
import { HashLink as Link } from 'react-router-hash-link';

const FooterV2 = () => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-style-two default-padding">
                    <div className="container">
                        <div className="footer-bottom-shape">
                            <img src="/assets/img/shape/9.png" alt="Image Not Found" />
                        </div>
                        <div className="footer-top text-center">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link to="/#"><img src="/assets/img/logo-light.png" alt="Logo" /></Link>
                                </div>
                            </div>
                        </div>
                        <FooterRowContent />
                    </div>
                </div>
                <div className="footer-bottom-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())} Restan. All Rights Reserved by <a href="https://themeforest.net/user/coderstation" target='_blank'>CoderStation</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link to="/about-us#">Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us#">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact#">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;