import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../layout/ClientLayout';
import logo404 from '../../public/assets/images/error-img.png';
const Page404 = () => (
    <div>
        <Helmet>
            <title>Enests | 404 Page</title>
            <meta property="og:title" content="Enests | 404 Page" />
        </Helmet>
        <Layout>
            <section className="error-wrapper sec-pd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="error-details">
                                <div className="heading-error">
                                    <span>404</span>
                                </div>
                                <div className="er-txt">
                                    <h4>OOPS! Page Not Found!</h4>
                                    <p>We're sorry but the page you were looking for wasn't found or doesn't exist anymore</p>
                                </div>
                                <div className="btn-holder">
                                    <button className="site-btn">Back to Home</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-wrapper mob-none">
                                <img src={logo404} className="img-fluid" alt="404 image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </div>
);

export default Page404;