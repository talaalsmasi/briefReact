import React from 'react';
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json"
import SingleTestimonialV1 from './SingleTestimonialV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper/modules';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-area bg-gray default-padding">
                <div className="testimonial-shape">
                    <img src="/assets/img/shape/5.png" alt="Image Not Found" />
                    <img src="/assets/img/shape/7.png" alt="Image Not Found" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Happy Customers</h4>
                                <h2 className="title">Our Customers Feedback</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-center ">
                        <div className="col-lg-5">
                            <div className="testimonial-thumb">
                                <img src="/assets/img/team/4.jpg" alt="Image Not Found" />
                                <img src="/assets/img/team/5.jpg" alt="Image Not Found" />
                                <img src="/assets/img/team/6.jpg" alt="Image Not Found" />
                                <img src="/assets/img/team/7.jpg" alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <Swiper
                                className="testimonial-carousel"
                                modules={[Keyboard, Autoplay, Navigation, Pagination]}
                                direction={'horizontal'}
                                loop={true}
                                autoplay={false}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV1Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV1 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;