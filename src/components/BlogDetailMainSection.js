import React from 'react';
import blogImg from '../../public/assets/images/sample-img.jpg';
import adsImg from '../../public/assets/images/ads-2.jpg';
import userImg from '../../public/assets/images/us-img.jpg';

const BlogDetailMainSection = () => {
    return (
        <div className="col-lg-8">
            <div className="main-content">
                <div className="blog-box mg-btm">
                    <div className="blog-box-inner">
                        <figure className="img-holder">
                            <img src={blogImg} alt="Blog Image" className="img-fluid" />
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
                                <p>
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.

                                </p>
                            </div>
                            <div className="shr-list-holder">
                                <span>Share on :</span>
                                <ul className="share-list">
                                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                    <li><a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ads mg-btm">
                    <img src={adsImg} alt="Ad Image" className="img-fluid" />
                </div>
                <div className="comment-sec mg-btm">
                    <div className="comment-sec-inner">
                        <div className="cmnt-heading">
                            <h2>Comments <span className="cmnt-count">7</span> </h2>
                        </div>
                        <div className="media comment-box">
                            <div className="media-left">
                            <a href="#">
                                <img className="img-fluid user-photo" src={userImg} />
                            </a>
                            </div>
                            <div className="media-body">
                                <div className="cmnt-details">
                                    <div className="heading-date">
                                        <h4 className="media-heading">John Doe</h4>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <div className="r-btn-holder">
                                        <button className="rp-btn"><span className="rp-cion"><i className="fas fa-reply"></i></span>Replay</button>
                                        </div>
                                </div>
                                <div className="media child-comment">
                                    <div className="media-left">
                                        <a href="#">
                                            <img className="img-fluid user-photo" src={userImg} />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <div className="cmnt-details">
                                        <div className="heading-date">
                                        <h4 className="media-heading">John Doe</h4>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                        <div className="r-btn-holder">
                                            <button type="button" className="rp-btn"><span className="rp-cion"><i className="fas fa-reply"></i></span>Replay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media comment-box">
                            <div className="media-left">
                                <a href="#">
                                    <img className="img-fluid user-photo" src={userImg} />
                                </a>
                            </div>
                            <div className="media-body">
                                <div className="cmnt-details">
                                    <div className="heading-date">
                                        <h4 className="media-heading">John Doe</h4>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <div className="r-btn-holder">
                                        <button className="rp-btn"><span className="rp-cion"><i className="fas fa-reply"></i></span>Replay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label">Website</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label">Your Comments</label>
                                    <textarea className="form-control" id="GeneInforSummary" rows="6"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="site-btn">Post Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BlogDetailMainSection;