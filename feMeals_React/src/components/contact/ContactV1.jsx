import React from 'react';
import ReactWOW from 'react-wow';
import ContactForm from '../form/ContactForm';

const ContactV1 = () => {
    return (
        <>
            <div className="contact-style-one-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact-style-one-info">
                                <ul>
                                    <ReactWOW animation='fadeInUp' delay='100ms'>
                                        <li className="wow">
                                            <div className="icon">
                                                <img src="/assets/img/icon/phone.png" alt="Icon" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Hotline</h5>
                                                <a href="">+4733378901</a>
                                            </div>
                                        </li>
                                    </ReactWOW>
                                    <ReactWOW animation='fadeInUp' delay='300ms'>
                                        <li className="wow fadeInUp">
                                            <div className="icon">
                                                <img src="/assets/img/icon/placeholder.png" alt="Icon" />
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Our Location</h5>
                                                <p>
                                                    55 Main Street, The Grand Avenue 2nd Block, New York City
                                                </p>
                                            </div>
                                        </li>
                                    </ReactWOW>
                                    <ReactWOW animation='fadeInUp' delay='500ms'>
                                        <li className="wow">
                                            <div className="icon">
                                                <img src="/assets/img/icon/email.png" alt="Icon" />
                                            </div>
                                            <div className="info">
                                                <h5 className="title">Official Email</h5>
                                                <a href="mailto:info@restan.com.com">info@restan.com</a>
                                            </div>
                                        </li>
                                    </ReactWOW>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact-form-style-one">
                                <div className="heading text-center">
                                    <h5 className="sub-title">Keep in touch</h5>
                                    <h2 className="heading">Send us a Massage</h2>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;