import React from 'react';

const UserDetailSideSection = () => {
    return (
        <div className="col-lg-4">
            <aside className="list-pf-sidebar">
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
                        <h4>Review Distribution</h4>
                    </div>
                    <div className="rdis-wrapper">
                        <div className="rs-heding">
                            <span className="rd-style">5 stars</span>
                        </div>
                        <div className="rt-wrapper">
                            <div className="rating-wrapper">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                            </div>
                        </div>
                        <div className="rt-cnt">
                            <span className="rd-style">5</span>
                        </div>
                    </div>
                    <div className="rdis-wrapper">
                        <div className="rs-heding">
                            <span className="rd-style">4 stars</span>
                        </div>
                        <div className="rt-wrapper">
                            <div className="rating-wrapper">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="rt-cnt">
                            <span className="rd-style">56</span>
                        </div>
                    </div>
                    <div className="rdis-wrapper">
                        <div className="rs-heding">
                            <span className="rd-style">4 stars</span>
                        </div>
                        <div className="rt-wrapper">
                            <div className="rating-wrapper">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="rt-cnt">
                            <span className="rd-style">6</span>
                        </div>
                    </div>
                    <div className="rdis-wrapper">
                        <div className="rs-heding">
                            <span className="rd-style">2 stars</span>
                        </div>
                        <div className="rt-wrapper">
                            <div className="rating-wrapper">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="rt-cnt">
                            <span className="rd-style">0</span>
                        </div>
                    </div>
                    <div className="rdis-wrapper">
                        <div className="rs-heding">
                            <span className="rd-style">1 star</span>
                        </div>
                        <div className="rt-wrapper">
                            <div className="rating-wrapper">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star "></span>
                                    <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <div className="rt-cnt">
                            <span className="rd-style">0</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default UserDetailSideSection;