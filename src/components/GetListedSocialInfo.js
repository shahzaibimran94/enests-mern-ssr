import React from 'react';

const GetListedSocialInfo = () => {
    return (
        <div>
            <div className="form-box wrapper-mg">
                <div className="sec-heading">
                    <div className="f-icon-holder">
                        <span><i className="fas fa-share-alt"></i></span>
                    </div>
                    <div className="heading">
                        <h2>Social <strong>Information</strong> </h2>
                    </div>
                    <div className="sub-heading">
                        <p>Write Something General Information About Your Listing</p>
                    </div>
                </div>
                <div className="f-data-wrapper wrapper-mg">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label"><span><i className="fab fa-facebook-f"></i></span> Facebook</label>
                                <input type="text" className="form-control" placeholder="http://" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label"><span><i className="fab fa-twitter"></i></span> Twitter</label>
                                <input type="text" className="form-control" placeholder="http://" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label"><span><i className="fab fa-instagram"></i></span> Instagram</label>
                                <input type="text" className="form-control" placeholder="http://" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label"><span><i className="fab fa-linkedin-in"></i></span> Linkedin</label>
                                <input type="text" className="form-control" placeholder="http://" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="f-submit-btn-holder">
                <input type="submit" className="site-btn" value="Submit Listing" />
            </div>
        </div>
    );
}

export default GetListedSocialInfo;