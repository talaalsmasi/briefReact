import React from 'react';

const BannerV3 = () => {
    return (
        <>
            <div className="banner-style-three-area text-light text-center video-bg-live bg-cover" style={{ backgroundImage: "url(assets/img/banner/13.jpg)" }}>

                {/*   <div className="player" data-property="{videoURL:'uMAbWsMnKYk',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:103, opacity:1, quality:'default'}"></div> */}

                {/*     <div className="player">
                    <ReactPlayer url='https://vimeo.com/744483551' width="100%" height="506px" playing={true} muted={true} loop={true} />
                </div> */}
                
                <div className="banner-style-three-content shadow dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Luxurious Foods</h2>
                                <ul className="list-quality">
                                    <li>Food</li>
                                    <li>Drinks</li>
                                    <li>Party</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV3;