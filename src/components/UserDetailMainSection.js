import React from 'react';
import rvImg from '../../public/assets/images/rv-img.jpg';

const reviews = new Array(4).fill(0);

const UserDetailMainSection = () => {
    return (
        <div className="col-lg-8">
            <section className="content-area">
                <div className="hf-wrapper">
                    <div className="heading-f">
                        <h2><span className="r-counter">4</span> Reviews by Amethyst Carly</h2>
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
                    { reviews.map((r, i) => (<div className="review-box user-review-box wrapper-mg" key={i}>
                        <div className="review-box-inner">
                            <div className="rv-img-wrapper">
                                <div className="img-holder">
                                    <img src={rvImg} alt="Review Image" />
                                </div>
                                
                            </div>
                            <div className="review-content">
                                <div className="site-rat">
                                    <div className="rev-site-title">
                                        <h4>FurnitureInFashion</h4>    
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
                                <div className="rev-title">
                                    <h3>Outstanding design with quallity</h3>
                                </div>
                                <div className="rev-content">
                                    <p>
                                        Excellent product and fast shipping.  Will be doing business with them again
                                    </p>
                                </div>
                                <div className="rev-btm-ftr">
                                    <div className="date-holder">
                                        <span><i className="far fa-clock"></i>22-02-2020</span>
                                    </div>
                                    <div className="com-ftr-right">
                                    <ul className="btm-list">
                                        <li className="share"><span className="com-ftr-icon"><i className="fas fa-share-alt"></i></span>Share</li>
                                        <li className="hlp-ful"><span className="com-ftr-icon"><i className="fas fa-thumbs-up"></i></span>Helpful</li>
                                    </ul>
                                </div>
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

export default UserDetailMainSection;