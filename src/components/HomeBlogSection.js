import React from 'react';
import sampleImg from '../../public/assets/images/sample-img.jpg';

const HomeBlogSection = () => {
    return (
        <section className="blog-sec sec-pd">
            <div className="container">
                <div className="sec-heading">
                    <div className="heading">
                        <h2>From The <strong>Blogs</strong> </h2>
                    </div>
                    <div className="sub-heading">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-box wrapper-mg">
                        <div className="blog-box-inner img-effect">
                            <figure className="img-holder">
                                <img src={sampleImg} alt="" className="img-responsive" />
                            </figure>
                            <div className="blog-content">
                                <div className="cat-box">
                                    <ul className="cat-list">
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Travel</a></li>
                                    </ul>
                                </div>
                                <div className="blog-heading">
                                    <a href="#">
                                        7 Moments To Remember From Directory.
                                    </a>
                                </div>
                                <div className="blog-details">
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ...
                                    </p>
                                </div>
                                <div className="blog-lvc">
                                    <div className="admin-holder">
                                        <span><i className="far fa-user"></i> admin</span>
                                    </div>
                                    <div className="comnt-holder">
                                        <span><i className="far fa-comment"></i> 23</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-box wrapper-mg">
                        <div className="blog-box-inner img-effect">
                            <figure className="img-holder">
                                <img src={sampleImg} alt="" className="img-responsive" />
                            </figure>
                            <div className="blog-content">
                                <div className="cat-box">
                                    <ul className="cat-list">
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Travel</a></li>
                                    </ul>
                                </div>
                                <div className="blog-heading">
                                    <a href="#">
                                        7 Moments To Remember From Directory.
                                    </a>
                                </div>
                                <div className="blog-details">
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ...
                                    </p>
                                </div>
                                <div className="blog-lvc">
                                    <div className="admin-holder">
                                        <span><i className="far fa-user"></i> admin</span>
                                    </div>
                                    <div className="comnt-holder">
                                        <span><i className="far fa-comment"></i> 23</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-box wrapper-mg">
                        <div className="blog-box-inner img-effect">
                            <figure className="img-holder">
                                <img src={sampleImg} alt="" className="img-responsive" />
                            </figure>
                            <div className="blog-content">
                                <div className="cat-box">
                                    <ul className="cat-list">
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Travel</a></li>
                                    </ul>
                                </div>
                                <div className="blog-heading">
                                    <a href="#">
                                        7 Moments To Remember From Directory.
                                    </a>
                                </div>
                                <div className="blog-details">
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ...
                                    </p>
                                </div>
                                <div className="blog-lvc">
                                    <div className="admin-holder">
                                        <span><i className="far fa-user"></i> admin</span>
                                    </div>
                                    <div className="comnt-holder">
                                        <span><i className="far fa-comment"></i> 23</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="btn-holder cn-btn">
                    <a href="#" className="site-btn">View All</a>
                </div>
            </div>
        </section>
    );
}

export default HomeBlogSection;