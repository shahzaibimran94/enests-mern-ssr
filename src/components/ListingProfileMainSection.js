import React from 'react';
import reviewAuthorImg from '../../public/assets/images/re-ath.jpg';

const reviews = new Array(4).fill(0);
const ListingProfileMainSection = () => {
    return (
        <div className="col-lg-8">
            <section className="content-area">
                <div className="box-wrapper">
                    <div className="box-heading">  
                        <h2>About - AAM Consultants</h2>
                    </div>
                    <div className="border-box mg-btm">
                        <div className="box-content">
                            <div className="content-details">
                                <p>
                                    AAM Consultants is one of the most trusted SEO services companies in the world. We have completed a lot of search engine optimization, website development, graphic design, and writing projects. Our mission is to 
                                    provide easy and enjoyable solutions to our honorable clients. We communicate in professional and responsive way because we believe that great communication is necessary to provide free of flaws services.
                                </p>
                                <p>
                                    AAM Consultants offer top quality graphic design, website development, SEO and writing solutions at a very affordable price. AAM Consultants quickly established a reputation for high-quality work. Our talented and experienced team will provide you exceptional and timely services. We offer 100% satisfaction and 
                                    money-back guarantee to our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fk-wrapper">
                    <div className="fcs-wrapper">
                        <div className="box-wrapper mg-btm">
                            <div className="box-heading">  
                                <h2>Services Focus</h2>
                            </div>
                            <div className="border-box">
                                <div className="box-content">
                                    <div className="content-details">
                                        <ul className="sfc-list">
                                            <li>SEO</li>
                                            <li>Web Development</li>
                                            <li>Graphic Design</li>
                                            <li>Business Managemaent</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kyc">
                        <div className="box-wrapper mg-btm">
                            <div className="box-heading">  
                                <h2>Key Client's</h2>
                            </div>
                            <div className="border-box">
                                <div className="box-content">
                                    <div className="content-details">
                                        <ul className="sfc-list">
                                            <li>Pepsei</li>
                                            <li>CocaCola</li>
                                            <li>Bonanza</li>
                                            <li>Khaadi</li>
                                            <li>Neslte</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hf-wrapper">
                    <div className="heading-f">
                        <h2>AAM Consultants Reviews <span className="r-counter">4</span> </h2>
                    </div>
                    <div className="flt-holder">
                        <select className="form-control" id="CategorySelect">
                                <option>All</option>
                                <option>Health</option>
                                <option>Travel</option>
                                <option>Food</option>
                        </select>
                    </div>
                </div>
                <div className="reviews-wrapper">
                    { reviews.map((r, i) => (<div className="review-box wrapper-mg" key={i}>
                        <div className="review-box-inner">
                            <div className="rv-img-wrapper">
                                <div className="img-holder">
                                    <img src={reviewAuthorImg} alt="Review Author" />
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
                    </div>)) }
                    <div className="btn-holder">
                        <button className="site-btn">Load More</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListingProfileMainSection;