import React from 'react';

const GeneralInformation = () => {
    return (
        <div className="form-box">
            <div className="sec-heading">
                <div className="f-icon-holder">
                    <span><i className="far fa-copy"></i></span>
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
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Tagline</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">What size is your company? </label>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">When was your company founded? </label>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Category </label>
                            <select className="form-control" id="CategorySelect">
                                <option>Sports</option>
                                <option>Business</option>
                                <option>Health</option>
                                <option>Food</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Sub Category </label>
                            <select className="form-control" id="SubCategorySelect">
                                <option>Cricket</option>
                                <option>Football</option>
                                <option>Tennis</option>
                                <option>Basketball</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Summary</label>
                            <textarea className="form-control" id="GeneInforSummary" rows="4"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralInformation;