import React from 'react';
import ReactWOW from 'react-wow';
import ReservationForm from '../form/ReservationForm';

const ReservationV1 = ({ btnClass, sectionClass }) => {
    return (
        <>
            <div className={`reservation-area default-padding-top bg-cover shadow dark ${sectionClass}`} style={{ backgroundImage: 'url(assets/img/banner/2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="reservation-info text-light">
                                <h4 className="sub-heading">Reservation</h4>
                                <h2 className="title">Reservation Your Favorite Private Table</h2>
                                <p>
                                    {`A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.`}
                                </p>
                                <div className="reservation-time">
                                    <ul>
                                        <li>
                                            <h4>Launch Menu</h4>
                                            <p>
                                                30+ items
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Dinner Menu</h4>
                                            <p>
                                                50+ items
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <ReactWOW animation='fadeInUp' delay='300ms'>
                                <div className="reservation-form animate">
                                    <ReservationForm btnClass={btnClass} />
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReservationV1;