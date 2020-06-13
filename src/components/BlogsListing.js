import React from 'react';
import blogImg from '../../public/assets/images/sample-img.jpg';

const blogs = new Array(4).fill(0);

const BlogsListing = () => {
    return (
        <div className="col-lg-8">
            <div className="main-content">
                { blogs.map((b, i) => (<div className="blog-box mg-btm" key={i}>
                    <div className="blog-box-inner img-effect">
                        <figure className="img-holder">
                            <img src={blogImg} alt="Blog Image" className="img-responsive" />
                        </figure>
                        <div className="blog-content">
                            <div className="cat-box">
                                <ul className="cat-list">
                                    <li><a href="#">Travel</a></li>
                                </ul>
                            </div>
                            <div className="blog-lvc">
                                <div className="admin-holder">
                                    <span><i className="far fa-user"></i> admin</span>
                                </div>
                                <div className="date-holder">
                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                </div>
                            </div>
                            <div className="blog-heading">
                                <a href="#">
                                Ten Unconventional Knowledge About Directory Blog That You Can't Learn From Books.
                                </a>
                            </div>
                            <div className="blog-details">
                                <p>
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.

                                </p>
                            </div>
                            <div className="btn-holder">
                                <a href="#" className="site-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>)) }
                <div className="pagination-wrapper">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default BlogsListing;