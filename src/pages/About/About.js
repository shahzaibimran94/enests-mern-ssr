import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import aboutImg from '../../../public/assets/images/abt-img.jpg';
import loadable from '@loadable/component';
const OwlCarousel = loadable(() => 
    import('react-owl-carousel')
, {ssr: true});

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | About</title>
                <meta property="og:title" content="Enests | About" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'about us'} innerHeading={'Contact us'}/>
                <section className="about-sec sec-pd">
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-md-6">
                                <div className="img-frame-wrapper">
                                    <div className="img-frame"></div>
                                    <div className="img-holder img-effect">
                                        <img src={aboutImg} alt="About Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="abt-us-content">
                                    <div className="heading">
                                        <h2> <strong>enests</strong> Story So For...</h2>
                                    </div>
                                    
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </p>
                                
                                </div>
                            </div>
                        </div>
                        <div className="abt-us-content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="our-rwd sec-pd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="our-rwd-wrapper">
                                    <div className="icon-holder">
                                        <i className="far fa-check-circle"></i>
                                    </div>
                                    <div className="rwd-heading">
                                        <h4>100 million+</h4>
                                    </div>
                                    <div className="rwd-sub-heading">
                                        <p> Lorem Ipsum is simply</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="our-rwd-wrapper">
                                    <div className="icon-holder">
                                        <i className="far fa-check-circle"></i>
                                    </div>
                                    <div className="rwd-heading">
                                        <h4>100 million+</h4>
                                    </div>
                                    <div className="rwd-sub-heading">
                                        <p> Lorem Ipsum is simply</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="our-rwd-wrapper">
                                    <div className="icon-holder">
                                        <i className="far fa-check-circle"></i>
                                    </div>
                                    <div className="rwd-heading">
                                        <h4>100 million+</h4>
                                    </div>
                                    <div className="rwd-sub-heading">
                                        <p> Lorem Ipsum is simply</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tsmonial-sec sec-pd">
                    <div className="container">
                        <div className="sec-heading">
                            <div className="heading">
                                <h2>What People Are <strong>Saying About Us</strong> </h2>
                            </div>
                            <div className="sub-heading">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <OwlCarousel 
                            className="owl-carousel tstimnl-carousel"
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
                                        <div className="review-content">
                                            <div className="site-rat">
                                                <div className="rev-site-title">
                                                    <a href="#">John Smith</a>
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
                                        <div className="review-content">
                                            <div className="site-rat">
                                                <div className="rev-site-title">
                                                    <a href="#">John Smith</a>
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
                                        <div className="review-content">
                                            <div className="site-rat">
                                                <div className="rev-site-title">
                                                    <a href="#">John Smith</a>
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
                                        <div className="review-content">
                                            <div className="site-rat">
                                                <div className="rev-site-title">
                                                    <a href="#">John Smith</a>
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
                                        <div className="review-content">
                                            <div className="site-rat">
                                                <div className="rev-site-title">
                                                    <a href="#">John Smith</a>
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
            </Layout>
        </div>
    );
}

export default About;