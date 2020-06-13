import React from 'react';
import listingLogo from '../../public/assets/images/listing-logo.png';

const ListingProfileBanner = () => {
    return (
        <section className="inner-page-banner">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-txt">
                            <div className="data-wrapper">
                                <div className="left-info">
                                        <div className="img-txt-wapper">
                                            <div className="img-wrapper">
                                                <div className="img-holder">
                                                    <img src={listingLogo} alt="Listing Logo" />
                                                </div>
                                            </div>
                                            <div className="left-txt-wrapper">
                                                <div className="title">
                                                    <h1>AAM Consultants</h1>
                                                    <p>SEO Services Company</p>
                                                </div>
                                                <div className="rv-wrapper">
                                                    <div className="rating-wrapper">
                                                        <span className="counter">4.0</span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star"></span>
                                                    </div>
                                                    <div className="riew-txt">
                                                        <a href="#">11 reviews <span className="rvr-icon"><i className="fas fa-chevron-right"></i></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="right-info">
                                    <div className="contact-info">
                                        <p className="website"><span className="ci-icon"><i className="fas fa-globe"></i></span>www.aamconsultants.com</p>
                                        <p className="email"><span className="ci-icon"><i className="fas fa-envelope"></i></span>info@aamconsultants.com</p>
                                        <p className="address"><span className="ci-icon"><i className="fas fa-map"></i></span>Near Metro Station، Ferozepur Road Lahore Punjab 54600 Pakistan</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingProfileBanner;