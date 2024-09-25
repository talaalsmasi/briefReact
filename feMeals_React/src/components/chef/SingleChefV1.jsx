import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleChefV1 = ({ chef }) => {
    const { id, thumb, designation, name } = chef

    return (
        <>
            <div className="chef-style-one">
                <div className="chef-thumb">
                    <img src={`assets/img/team/${thumb}`} alt="Image Not Found" />
                    <div className="info">
                        <h4><Link to={`/chef-details/${id}#`}>{name}</Link></h4>
                        <span>{designation}</span>
                    </div>
                    <ul className="social">
                        <li>
                            <Link to="https://www.facebook.com/" target='_blank'>
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.youtube.com/" target='_blank'>
                                <i className="fab fa-youtube"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SingleChefV1;