import React, { useState } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

const defaultAddKeys = [13,32,188];

const GetListedDetail = () => {
    const [clientTags, setClientTags] = useState([]);
    const [serviceTags, setServiceTags] = useState([]);
    const [mainProdTags, setMainProdTags] = useState([]);

    return (
        <div className="form-box wrapper-mg">
            <div className="sec-heading">
                <div className="f-icon-holder">
                    <span><i className="far fa-file-alt"></i></span>
                </div>
                <div className="heading">
                    <h2>Full <strong>Detail</strong> </h2>
                </div>
                <div className="sub-heading">
                    <p>Write Something General Information About Your Listing</p>
                </div>
            </div>
            <div className="f-data-wrapper wrapper-mg">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Primary Sales Email</label>
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Website</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="input">List of Your Key Clients</label>
                            <TagsInput 
                                value={clientTags} 
                                addOnBlur={true}
                                addOnPaste={true}
                                addKeys={defaultAddKeys}
                                onChange={(tags) => setClientTags(tags)} />
                            <small className="form-text text-muted">Separate keywords with a comma, space bar, or enter key</small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Services Offered</label>
                            <TagsInput 
                                value={serviceTags} 
                                addOnBlur={true}
                                addOnPaste={true}
                                addKeys={defaultAddKeys}
                                onChange={(tags) => setServiceTags(tags)} />
                            <small className="form-text text-muted">Separate keywords with a comma, space bar, or enter key</small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Main Products Or Services</label>
                            <TagsInput 
                                value={mainProdTags} 
                                addOnBlur={true}
                                addOnPaste={true}
                                addKeys={defaultAddKeys}
                                onChange={(tags) => setMainProdTags(tags)} />
                            <small className="form-text text-muted">Separate keywords with a comma, space bar, or enter key</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetListedDetail;