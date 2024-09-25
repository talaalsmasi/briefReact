import React from 'react';
import ReservationForm from '../form/ReservationForm';
import ReactWOW from 'react-wow';
import ScheduleHours from '@/assets/jsonData/schedule/ScheduleHours.json'

const FeatureV1 = () => {
    return (
        <>
            <div className="top-feature-style-one-area default-padding bg-cover" style={{ backgroundImage: "url(assets/img/shape/1.png)" }}>
                <div className="shape-bottom-right">
                    <img src="/assets/img/shape/9.png" alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="top-feature-style-one-info">
                        <div className="row align-center">
                            <div className="col-xl-4 col-lg-6">
                                <div className="reservation-style-two reservation mr-50 mr-md-0 mr-xs-0">
                                    <h2 className="title">Book a table</h2>
                                    <ReservationForm />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <ReactWOW animation='fadeInUp' delay='100ms'>
                                    <div className="top-feature-style-one-thumb animate">
                                        <img src="/assets/img/about/4.jpg" alt="Image Not Found" />
                                    </div>
                                </ReactWOW>
                            </div>
                            <div className="col-xl-4 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                                <div className="opening-hours-hightlight text-light">
                                    <h2 className="title">Opening Hours</h2>
                                    <ul>
                                        {ScheduleHours.map(schedule =>
                                            <li key={schedule.id}>
                                                <span> {schedule.day} :  </span>
                                                <div className={`${schedule.listClass}`}> {schedule.hours} </div>
                                            </li>
                                        )}
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

export default FeatureV1;