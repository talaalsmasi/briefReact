import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactWOW from 'react-wow';

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="about-thumb">
                    <ReactWOW animation='fadeInLeft' delay='100ms'>
                        <div className="item animate" style={{ backgroundImage: "url(assets/img/about/2.jpg)" }}></div>
                    </ReactWOW>
                    <ReactWOW animation='fadeInLeft' delay='200ms'>
                        <div className="item animate" style={{ backgroundImage: "url(assets/img/about/3.jpg)" }}></div>
                    </ReactWOW>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <ReactWOW animation='fadeInUp' delay="400ms">
                                <div className="about-style-one-info animate">
                                    <img src="/assets/img/shape/2.png" alt="Image Not Found" />
                                    <h4 className="sub-heading">About us</h4>
                                    <h2 className="title">We Invite You <br /> To Visit Our Restaurant</h2>
                                    <p>
                                        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
                                    </p>
                                    <Link className="btn btn-theme btn-md animation mt-10" to="/about-us#">Discover More</Link>
                                </div>
                            </ReactWOW>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;