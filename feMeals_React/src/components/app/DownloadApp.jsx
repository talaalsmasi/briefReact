import React from 'react';
import illustration16 from "/assets/img/illustration/16.png"
import { Link } from 'react-router-dom';

const DownloadApp = () => {
    return (
        <>
            <div className="download-app-area default-padding-top">
                <div className="container">
                    <div className="download-app-items bg-dark text-light" style={{ backgroundImage: "url(assets/img/shape/21.png)" }}>
                        <div className="row align-center">

                            <div className="col-lg-5">
                                <div className="download-app-thumb animate" data-animate="fadeInUp">
                                    <img src={illustration16} alt="Image Not Found" />
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <h2 className="title">Are you Ready to Start your online Order?</h2>
                                <p>
                                    Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                                </p>
                                <div className="d-flex">
                                    <Link className="btn btn-light circle btn-md animation" to="https://www.apple.com/app-store/" target='_blank'><i className="fab fa-app-store"></i> App Store</Link>
                                    <Link className="btn btn-theme circle btn-md animation" to="https://play.google.com/store/" target='_blank'><i className="fab fa-google-play"></i> Play Store</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DownloadApp;