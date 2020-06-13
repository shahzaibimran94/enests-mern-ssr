import React from 'react';

const GetListedLogo = (props) => {
    const { description = '', descInner = '' } = props
    return (
        <div className="form-box wrapper-mg">
            <div className="sec-heading">
                <div className="f-icon-holder">
                    <span><i className="far fa-images"></i></span>
                </div>
                <div className="heading">
                    <h2>Add <strong>Logo</strong> </h2>
                </div>
                <div className="sub-heading">
                    <p>{ description } { descInner ? <span className="prf-phto">{ descInner }?</span> : '' }</p>
                </div>
            </div>
            <div className="f-data-wrapper wrapper-mg">
                <div className="row">
                    <div className="col-md-12">
                        <label className="form-label">Upload Your Logo</label>
                        <div className="logo-box-wrapper js">
                            <div className="upload-icon">
                                <span><i className="fas fa-cloud-upload-alt"></i></span>
                            </div>
                        <div className="input-file-container">  
                            <input className="input-file" id="my-file" type="file" />
                            <label tabIndex="0" htmlFor="my-file" className="input-file-trigger">Select a file...</label>
                        </div>
                            <p className="file-return"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetListedLogo;