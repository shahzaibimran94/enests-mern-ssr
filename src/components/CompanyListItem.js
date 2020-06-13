import React from 'react';
import companyLogo from '../../public/assets/images/clogo.png';

const CompanyListItem = () => {
    return (
        <div className="company-box wrapper-mg">
            <div className="company-box-inner">
                <div className="img-holder">
                    <figure><img src={companyLogo} alt="Company Logo" /></figure>
                </div>
                <div className="data-holder">
                    <div className="hr-wrapper">
                        <div className="c-heading">
                            <a href="#">AAM Consultant</a>
                            <div className="c-tagline">
                                <p>SEO Services Company</p>
                            </div>
                        </div>
                        <div className="rv-wrapper">
                            <div className="rating-wrapper">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className="riew-txt">
                                <a href="#">11 reviews <span className="rvr-icon"><i className="fas fa-chevron-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-info">
                        <p>
                        Wisdek's work has produced more than just additional traffic and click-through rates. work has produced more than just additional.
                        </p>
                    </div>
                    <div className="cmp-ftr">
                        <div className="com-ftr-left">
                            <ul className="btm-list">
                                <li><span className="com-ftr-icon"><i className="far fa-flag"></i></span>Founded 2016</li>
                                <li><span className="com-ftr-icon"><i className="far fa-user"></i></span>10-49</li>
                                <li><span className="com-ftr-icon"><i className="fas fa-map-marker-alt"></i></span>Lahore,Pakistan</li>
                            </ul>
                        </div>
                        <div className="com-ftr-right">
                            <ul className="btm-list">
                                <li> <a href="#"><span className="com-ftr-icon"><i className="far fa-user-circle"></i></span>View Profile</a></li>
                                <li><a href="#"><span className="com-ftr-icon"><i className="fas fa-globe"></i></span>Visit Website</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyListItem;