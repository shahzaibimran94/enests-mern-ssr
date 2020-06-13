import React from 'react';
import userImg from '../../public/assets/images/re-ath.jpg';

const UserDetailBanner = () => {
    return (
        <section className="user-page-sec inner-page-banner">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-txt">
                            <div className="data-wrapper">
                                <div className="left-info">
                                    <div className="img-txt-wapper">
                                        <div className="img-wrapper">
                                            <div className="img-holder">
                                                <img src={userImg} alt="User" />
                                            </div>
                                        </div>
                                        <div className="left-txt-wrapper">
                                            <div className="title">
                                                <h1>Amethyst Carly</h1>
                                                <p>Member since November 03, 2017</p>
                                            </div>
                                            <div className="rv-wrapper">
                                                <div className="rating-wrapper">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="counter">4 Reviews</span>
                                                </div>
                                                <div className="riew-txt">
                                                    <a href="#"><span className="rvr-icon"><i className="fas fa-check-circle"></i></span>2 Helpful Votes </a>
                                                </div>
                                            </div>
                                        </div>
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

export default UserDetailBanner;