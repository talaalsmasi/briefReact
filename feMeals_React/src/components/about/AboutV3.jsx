import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="about-style-three-thumb">
                                <ReactWOW animation='fadeInRight' delay='100ms'>
                                    <img className="animate" src="assets/img/about/5.jpg" alt="Image Not Found" />
                                </ReactWOW>
                                <ReactWOW animation='fadeInUp' delay='200ms'>
                                    <img className="animate" src="assets/img/thumb/7.jpg" alt="Image Not Found" />
                                </ReactWOW>
                            </div>
                        </div>
                        <div className="col-lg-7 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-three-info">
                                <h4 className="sub-heading">Welcome at</h4>
                                <h2 className="title">Restan Restaurant</h2>
                                <div className="item-grid-two-colum">
                                    <div className="item">
                                        <p>
                                            Codulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                                        </p>
                                        <Link className="btn btn-theme btn-md animation" to="/food-menu#">Explore menu</Link>
                                    </div>
                                    <div className="item">
                                        <div className="quote">
                                            <p>
                                                Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                                            </p>
                                            <div className="site-owner">
                                                <div className="thumb">
                                                    <img src="/assets/img/team/1.jpg" alt="Image Not Found" />
                                                </div>
                                                <div className="info">
                                                    <h4>Mendia Juxef</h4>
                                                    <span>Restaurant Owner</span>
                                                </div>
                                            </div>
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

export default AboutV3;