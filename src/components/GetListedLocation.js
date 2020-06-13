import React from 'react';

const GetListedLocation = () => {
    return (
        <div className="form-box wrapper-mg">
            <div className="sec-heading">
                <div className="f-icon-holder">
                    <span><i className="fas fa-map-marker-alt"></i></span>
                </div>
                <div className="heading">
                    <h2>Add <strong>Locationo</strong> </h2>
                </div>
                <div className="sub-heading">
                    <p>Write Something General Information About Your Listing</p>
                </div>
            </div>
            <div className="f-data-wrapper wrapper-mg">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Temporary Address</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Coutry </label>
                            <select className="form-control" id="CategorySelect">
                                <option>Select Country</option>
                                <option>Pakistan</option>
                                <option>United State</option>
                                <option>India</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Zip-Code</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetListedLocation;