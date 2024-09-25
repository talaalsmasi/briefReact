import React from 'react';
import SocialShare from '../social/SocialShare';
import { Link } from 'react-router-dom';

const HeaderTopV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`top-bar-area top-bar-style-one bg-theme text-light ${sectionClass}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <ul className="item-flex">
                                <li>
                                    <a href="tel:+4733378901">
                                        <img src="/assets/img/icon/6.png" alt="Icon" /> Phone: +4733378901
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:name@email.com">
                                        <img src="/assets/img/icon/7.png" alt="Icon" /> Email: food@restan.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="item-flex">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/img/icon/flag.png" alt="Image Not Found" />
                                        English <i className="fas fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" to="#">Spanish</Link></li>
                                        <li><Link className="dropdown-item" to="#">Arabic</Link></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul>
                                        <SocialShare />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV1;