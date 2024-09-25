import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBannerV2 = ({ banner }) => {
    const { bgThumb, subTitle, titleFirst, titleLast, textFirst, textLast, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(assets/img/banner/${bgThumb})` }}></div>
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="info">
                                <h4>{subTitle}</h4>
                                <h2>{titleFirst}<br /> {titleLast}</h2>
                                <p>{textFirst} <br /> {textLast}</p>
                                <div className="button mt-30">
                                    <Link className="btn btn-md btn-theme animation" to="/shop#">{btnText}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shap">
                <img src="/assets/img/shape/12.png" alt="Image Not Found" />
                <img src="/assets/img/shape/13.png" alt="Image Not Found" />
                <img src="/assets/img/shape/14.png" alt="Image Not Found" />
                <img src="/assets/img/shape/15.png" alt="Image Not Found" />
            </div>
        </>
    );
};

export default SingleBannerV2;