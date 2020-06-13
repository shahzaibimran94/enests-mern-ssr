import React from 'react';
import { useHistory } from 'react-router-dom';

const InnerBanner = (props) => {
    const history = useHistory();
    const { mainHeading, innerHeading } = props;
    return (
        <section className="inner-page-banner">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="banner-info">
                            <h1 className="main-heading">{ mainHeading }</h1>
                            <div className="breadcrumbs">
                                <a href="" onClick={() => history.push('/')}>Home</a>
                                <span className="gt3_breadcrumb_divider"></span>
                                <span className="current">{ innerHeading }</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InnerBanner;