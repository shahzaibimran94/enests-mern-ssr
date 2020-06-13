import React from 'react';
import reAthImg from '../../public/assets/images/re-ath.jpg';
import loadable from '@loadable/component';
const OwlCarousel = loadable(() => 
    import('react-owl-carousel')
, {ssr: true});

const HomeRecentReviews = () => {
    return (
        <section className="rec-view-sec sec-pd">
            <div className="container">
                <div className="sec-heading">
                    <div className="heading">
                        <h2>Recent <strong>Reviews</strong> </h2>
                    </div>
                    <div className="sub-heading">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <OwlCarousel 
                    className="owl-carousel review-carousel"
                    items={3}
                    loop={true}
                    margin={15}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={4000}
                    smartSpeed={2000}
                    responsiveClass={true}
                    responsive={{
                        200:{
                            items:1
                        
                        },
                        400:{
                            items:1,
                            
                        },
                        600:{
                            items:2,
                            
                        },
                        1000:{
                            items:3,
                            
                            
                        }
                    }}>
                    <div className="carousel-items">
                        <div className="review-box wrapper-mg">
                            <div className="review-box-inner">
                                <div className="rv-img-wrapper">
                                    <div className="img-holder">
                                        <img src={reAthImg} alt="" />
                                    </div>
                                    <div className="aut-cap">
                                        <span>Jame Smith</span>
                                    </div>
                                </div>
                                <div className="review-content">
                                    <div className="site-rat">
                                        <div className="rev-site-title">
                                            <a href="#">facebook.com</a>
                                        </div>
                                        <div className="rating-holder">
                                            <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rev-content">
                                        <p>
                                            Excellent product and fast shipping.  Will be doing business with them again
                                        </p>
                                    </div>
                                    <div className="date-holder">
                                        <span><i className="far fa-clock"></i>22-02-2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-box wrapper-mg">
                            <div className="review-box-inner">
                                <div className="rv-img-wrapper">
                                    <div className="img-holder">
                                        <img src={reAthImg} alt="" />
                                    </div>
                                    <div className="aut-cap">
                                        <span>Jame Smith</span>
                                    </div>
                                </div>
                                <div className="review-content">
                                    <div className="site-rat">
                                        <div className="rev-site-title">
                                            <a href="#">facebook.com</a>
                                        </div>
                                        <div className="rating-holder">
                                            <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rev-content">
                                        <p>
                                            Excellent product and fast shipping.  Will be doing business with them again
                                        </p>
                                    </div>
                                    <div className="date-holder">
                                        <span><i className="far fa-clock"></i>22-02-2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-items">
                        <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="carousel-items">
                        <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-items">
                        <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-items">
                        <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-items">
                        <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-box wrapper-mg">
                                <div className="review-box-inner">
                                    <div className="rv-img-wrapper">
                                        <div className="img-holder">
                                            <img src={reAthImg} alt="" />
                                        </div>
                                        <div className="aut-cap">
                                            <span>Jame Smith</span>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <div className="site-rat">
                                            <div className="rev-site-title">
                                                <a href="#">facebook.com</a>
                                            </div>
                                            <div className="rating-holder">
                                                <div className="rating">
                                                <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rev-content">
                                            <p>
                                                Excellent product and fast shipping.  Will be doing business with them again
                                            </p>
                                        </div>
                                        <div className="date-holder">
                                            <span><i className="far fa-clock"></i>22-02-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-items">
                    <div className="review-box wrapper-mg">
                            <div className="review-box-inner">
                                <div className="rv-img-wrapper">
                                    <div className="img-holder">
                                        <img src={reAthImg} alt="" />
                                    </div>
                                    <div className="aut-cap">
                                        <span>Jame Smith</span>
                                    </div>
                                </div>
                                <div className="review-content">
                                    <div className="site-rat">
                                        <div className="rev-site-title">
                                            <a href="#">facebook.com</a>
                                        </div>
                                        <div className="rating-holder">
                                            <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rev-content">
                                        <p>
                                            Excellent product and fast shipping.  Will be doing business with them again
                                        </p>
                                    </div>
                                    <div className="date-holder">
                                        <span><i className="far fa-clock"></i>22-02-2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review-box wrapper-mg">
                            <div className="review-box-inner">
                                <div className="rv-img-wrapper">
                                    <div className="img-holder">
                                        <img src={reAthImg} alt="" />
                                    </div>
                                    <div className="aut-cap">
                                        <span>Jame Smith</span>
                                    </div>
                                </div>
                                <div className="review-content">
                                    <div className="site-rat">
                                        <div className="rev-site-title">
                                            <a href="#">facebook.com</a>
                                        </div>
                                        <div className="rating-holder">
                                            <div className="rating">
                                            <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rev-content">
                                        <p>
                                            Excellent product and fast shipping.  Will be doing business with them again
                                        </p>
                                    </div>
                                    <div className="date-holder">
                                        <span><i className="far fa-clock"></i>22-02-2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
}

export default HomeRecentReviews;