import React from 'react';
import PopupVideo from '../video/PopupVideo';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBannerV1 = ({ banner }) => {
    const { subTitle, titleFirst, titleLast, text, btnText, videoId } = banner

    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-xl-7 col-lg-9">
                            <h4>{subTitle}</h4>
                            <h2>{titleFirst} <br /> {titleLast}</h2>
                            <p>{text}</p>
                            <div className="button mt-40">
                                <Link className="btn btn-theme btn-md animation" to="/shop#">{btnText}</Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-3">
                            <PopupVideo videoClass="popup-youtube video-play-button" videoId={videoId}>
                                <i className="fas fa-play"></i>
                                <div className="effect"></div>
                            </PopupVideo>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV1;