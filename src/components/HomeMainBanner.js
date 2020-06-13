import React from 'react';
import locIcon from '../../public/assets/images/loc-icon.png';

const HomeMainBanner = () => {
    return (
        <section className="main-banner bg-banner">
            <section className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="banner-wrapper">
                            <div className="dlab-bnr-inr-entry align-m dlab-home">
                                    <div className="bnr-content">
                                        <h2><strong>Find Nearby Attractions</strong></h2><p>Expolore Top-Rated Attractions, Activities And More.</p>
                                    </div>
                                    <div className="search-filter-wrapper">
                                        <div className="search-filter-content">
                                                <form>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="I'm looking for..." />
                                                        <div className="form-group">
                                                                <input type="text" className="form-control loc-input" placeholder="Location" />
                                                                <div className="lis-search">
                                                                    <img src={locIcon} className="loc-icon" alt="" />
                                                                </div>
                                                            </div>
                                                        <div className="input-group-prepend">
                                                            <button className="site-btn text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
                                                        </div>
                                                    </div>
                                                </form>
                                        </div>
                                        <p className="text-center text-white m-b10 m-t30">Find awesome places, bars, restaurants &amp; activities.</p>
                                    </div>
                                    <div className="category-bx">
                                        <a href="#" className="category">
                                            <i className="fas fa-tshirt"></i>
                                            <p>carts</p>
                                        </a>
                                        <a href="#" className="category">
                                        <i className="fas fa-tshirt"></i>
                                            <p>foods</p>
                                        </a>
                                        <a href="#" className="category">
                                        <i className="fas fa-tshirt"></i>
                                            <p>candy</p>
                                        </a>
                                        <a href="#" className="category">
                                        <i className="fas fa-tshirt"></i>
                                            <p>medicine</p>
                                        </a>
                                        <a href="#" className="category">
                                        <i className="fas fa-tshirt"></i>
                                            <p>cake</p>
                                        </a>
                                        <a href="#" className="category">
                                        <i className="fas fa-tshirt"></i>
                                            <p>place</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section> 
    );
}

export default HomeMainBanner;