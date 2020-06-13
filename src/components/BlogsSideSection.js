import React from 'react';
import aboutImg from '../../public/assets/images/abt-img.jpg';
import catImg from '../../public/assets/images/cat-img.jpg';
import adsImg from '../../public/assets/images/ads.jpg';
import { useHistory } from 'react-router-dom';
import loadable from '@loadable/component';
const OwlCarousel = loadable(() => 
    import('react-owl-carousel')
, {ssr: true});

const BlogsSideSection = () => {
    const history = useHistory();
    return (
        <div className="col-lg-4">
            <aside className="blog-sidebar">
                <div className="side-wrapper">
                    <div className="s-border-box">
                        <div className="s-heading">
                            <h4>Search Review</h4>
                        </div>
                        <div className="search-box">
                            <div className="form-group has-search">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button className="search-btn" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="s-border-box">
                        <div className="s-heading">
                            <h4>Trending Post</h4>
                        </div>
                        <OwlCarousel 
                            className="owl-carousel owl-theme side-post-carousel"
                            loop={true}
                            margin={10}
                            nav={false}
                            autoplay={true}
                            autoplayTimeout={3000}
                            autoplayHoverPause={true}
                            responsive={{
                                0:{
                                    items:1
                                },
                                600:{
                                    items:1
                                },
                                1000:{
                                    items:1
                                }
                            }}>
                            <div className="item">
                                <div className="post-style-1">
                                    <figure><img src={aboutImg} alt="" /></figure>
                                    <div className="post-text">
                                        <div className="cat-rat-holder">
                                            <ul className="cat-list">
                                                <li><a href="#">career</a></li>
                                            </ul>
                                        </div>
                                        <div className="post-heading">
                                            <a href="#">World's Best Theme Design shop in 2019.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="post-style-1">
                                    <figure><img src={aboutImg} alt="" /></figure>
                                    <div className="post-text">
                                        <div className="cat-rat-holder">
                                            <ul className="cat-list">
                                                <li><a href="#">career</a></li>
                                            </ul>
                                        </div>
                                        <div className="post-heading">
                                            <a href="#">World's Best Theme Design shop in 2019.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="post-style-1">
                                    <figure><img src={aboutImg} alt="" /></figure>
                                    <div className="post-text">
                                        <div className="cat-rat-holder">
                                            <ul className="cat-list">
                                                <li><a href="#">career</a></li>
                                            </ul>
                                        </div>
                                        <div className="post-heading">
                                            <a href="#">World's Best Theme Design shop in 2019.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="s-border-box">
                        <div className="s-heading">
                            <h4>Follow Us</h4>
                        </div>
                        <div className="ftr-slist">
                            <ul className="social-list">
                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="s-border-box">
                        <div className="s-heading">
                            <h4>Recent Post</h4>
                        </div>
                        <div className="thumb-box img-effect">
                            <div className="img-wrapper">
                                <div className="img-holder">
                                <img src={catImg} alt="" />
                                </div>
                            </div>
                            <div className="thumb-box-txt">
                                <div className="thumb-heading">
                                    <a href="#">7 Moments To Remember From Directory.</a>
                                </div>
                                <div className="date-holder">
                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-box img-effect">
                            <div className="img-wrapper">
                                <div className="img-holder">
                                <img src={catImg} alt="" />
                                </div>
                            </div>
                            <div className="thumb-box-txt">
                                <div className="thumb-heading">
                                    <a href="#">7 Moments To Remember From Directory.</a>
                                </div>
                                <div className="date-holder">
                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-box img-effect">
                            <div className="img-wrapper">
                                <div className="img-holder">
                                <img src={catImg} alt="" />
                                </div>
                            </div>
                            <div className="thumb-box-txt">
                                <div className="thumb-heading">
                                    <a href="#">7 Moments To Remember From Directory.</a>
                                </div>
                                <div className="date-holder">
                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="thumb-box img-effect">
                            <div className="img-wrapper">
                                <div className="img-holder">
                                <img src={catImg} alt="" />
                                </div>
                            </div>
                            <div className="thumb-box-txt">
                                <div className="thumb-heading">
                                    <a href="#">7 Moments To Remember From Directory.</a>
                                </div>
                                <div className="date-holder">
                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s-border-box">
                        <div className="s-heading">
                            <h4>Top Categories</h4>
                        </div>
                        <div className="s-sub-cat-wrapper">
                            <ul className="sub-cat">
                                <li><a href="#"><span className="s-name">Football</span><span className="s-number">8</span> </a></li>
                                <li><a href="#"><span className="s-name">Cricket</span><span className="s-number">16</span> </a></li>
                                <li><a href="#"><span className="s-name">Hockey</span><span className="s-number">7</span> </a></li>
                                <li><a href="#"><span className="s-name">Tennis</span><span className="s-number">104</span> </a></li>
                                <li><a href="#"><span className="s-name">NBA</span><span className="s-number">55</span> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="s-border-box">
                        <div className="s-heading">
                            <h4>Write For Us</h4>
                        </div>
                        <div className="btn-holder">
                            <button className="site-btn" type="button" onClick={() => history.push('write-a-review')}>Write For Us</button>
                        </div>
                    </div>
                    <div className="ads">
                        <div className="ads-wrapper">
                            <img src={adsImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default BlogsSideSection;