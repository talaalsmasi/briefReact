import { HashLink as Link } from 'react-router-hash-link'
import React from 'react';

const SingleBlog2Column = ({ blog }) => {
    const { id, thumb, day, month, author, title, btnIcon, btnText, category } = blog

    return (
        <>
            <div className="home-blog-style-one-item">
                <Link to={`/blog-single-with-sidebar/${id}#`}>
                    <img src={`/assets/img/blog/${thumb}`} alt="Thumb" />
                </Link>
                <div className="content">
                    <div className="info">
                        <div className="date"><strong>{day}</strong> {month}</div>
                        <ul className="blog-meta">
                            <li>
                                By <Link to="#">{author}</Link>
                            </li>
                            <li>
                                <Link to="#">{category}</Link>
                            </li>
                        </ul>
                        <h4 className="title">
                            <Link to={`/blog-single-with-sidebar/${id}#`}>{title}</Link>
                        </h4>
                        <Link to={`/blog-single-with-sidebar/${id}#`} className="btn-read-more">{btnText} <i className={btnIcon}></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;