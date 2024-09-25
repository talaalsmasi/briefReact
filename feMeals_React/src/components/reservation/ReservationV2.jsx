import React from 'react';
import ReservationForm from '../form/ReservationForm';
import ReactPlayer from 'react-player';

const ReservationV2 = () => {
    return (
        <>
            <div className="reservation-area default-padding overflow-hidden reservation-two">
                <div className="container">
                    <div className="opening-hour-items">
                        <h2 className="text-fixed">Restan</h2>
                        <div className="shape">
                            <img src="/assets/img/shape/4.png" alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="opening-hours-thumb video-bg-live">
                                    {/* <img src="/assets/img/banner/12.jpg" alt="Image Not Found" /> */}
                                    <div className="player">
                                        <ReactPlayer url='https://www.youtube.com/watch?v=F3zw1Gvn4Mk' width="100%" height="700px" playing={true} muted={true} loop={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="opening-hours-info">
                                    <div className="reservation-form">
                                        <h2 className="title mb-30">Book A Table</h2>
                                        <ReservationForm />
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

export default ReservationV2;