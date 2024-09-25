import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV1 = ({ blog }) => {
    const { id, thumb, day, month, author, title, btnText } = blog

    return (
        <>
            <div className="home-blog-style-one-item">
                <Link to={`/blog-single-with-sidebar/${id}#`}>
                    <img src={`assets/img/blog/${thumb}`} alt="Image not Found" />
                </Link>
                <div className="content">
                    <div className="info">
                        <div className="date"><strong>{day}</strong> {month}</div>
                        <ul className="blog-meta">
                            <li>
                                By <Link to="#">{author}</Link>
                            </li>
                            <li>
                                <Link to="#">Burger</Link> ,
                                <Link to="#">Food</Link>
                            </li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/blog-single-with-sidebar/${id}#`}>{title}</Link>
                        </h4>
                        <Link to={`/blog-single-with-sidebar/${id}#`} className="btn-read-more">{btnText} <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV1;