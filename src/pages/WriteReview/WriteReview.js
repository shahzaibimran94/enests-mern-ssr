import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import GetListedLogo from '../../components/GetListedLogo';

const WriteReview = () => {
    return (<div>
        <Helmet>
          <title>Enests | Write a Review</title>
          <meta property="og:title" content="Enests | Write a Review" />
        </Helmet>
        <Layout>
            <InnerBanner mainHeading={'Write a Review'} innerHeading={'Write a Review'} />
            <section className="-w-review-sec sec-pd">  
                <div className="container">
                    <div className="wd-wrapper">
                        <div className="form-box">
                            <div className="sec-heading">
                                <div className="f-icon-holder">
                                    <span><i className="far fa-building"></i></span>
                                </div>
                                <div className="heading">
                                    <h2>General <strong>Information</strong> </h2>
                                </div>
                                <div className="sub-heading">
                                    <p>Write Something General Information About Your Listing</p>
                                </div>
                            </div>
                            <div className="f-data-wrapper wrapper-mg">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Find</label>
                                            <div className="c-search-holder">
                                            <button type="submit" className="search-submit" value="Search">
                                                <i className="fas fa-search"></i>
                                                </button>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        <div className="form-box wrapper-mg">
                            <div className="sec-heading">
                                <div className="heading">
                                    <h2>Review for <strong>AAM Consultant</strong> </h2>
                                </div>
                                <div className="sub-heading web-link">
                                <a href="">https://www.aamconsultant.com</a> 
                                </div>
                            </div>
                            <div className="f-data-wrapper wrapper-mg">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Ratings</label>
                                            <div className="rating-wrapper">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="rate-cap">roll over the stars then click to rate.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Title of Your Review</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Your Review</label>
                                        <textarea className="form-control" id="GeneInforSummary" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GetListedLogo description={'Add photo or prof of purchase (required)'} descInner={'why'}/>
                        <div className="f-submit-btn-holder">
                            <input type="submit" className="site-btn" value="Submit Listing" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </div>);
}

export default WriteReview;