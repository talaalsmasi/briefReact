import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactWOW from 'react-wow';

const AboutV2 = () => {
    return (
        <>
            <div className="about-style-two-area default-padding-bottom">
                <div className="shape-overlay">
                    <ReactWOW animation='fadeInLeft' delay='100ms'>
                        <img className="animate" src="assets/img/illustration/2.png" alt="Image Not Found" />
                    </ReactWOW>
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 order-lg-last">
                            <div className="about-style-thumb-box">
                                <div className="about-style-two-thumb">
                                    <ReactWOW animation='fadeInUp' delay='100ms'>
                                        <img className="animate" src="assets/img/illustration/chef.png" alt="Image Not Found" />
                                    </ReactWOW>
                                </div>
                                <img src="/assets/img/illustration/7.png" alt="Image Not Found" />
                                <div className="experience">
                                    <div className="curve-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                            <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                            <text><textPath href="#textPath">Award Winning Restaurant</textPath></text>
                                        </svg>
                                        <div className="thumb">
                                            <img src="/assets/img/icon/8.png" alt="Icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="about-style-two-info">
                                <h4 className="sub-heading">About us</h4>
                                <h2 className="title">Come for our fresh,delicious food you won’t forget.</h2>
                                <p>
                                    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
                                </p>
                                <div className="author-info">
                                    <Link className="btn btn-md btn-theme animation" to="/about-us#">Discover More</Link>
                                    <div className="author-details">
                                        <div className="author-content">
                                            <img src="/assets/img/shape/signeture.png" alt="Image Not Found" />
                                            <p>
                                                CEO, of Restan Restaurant
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;