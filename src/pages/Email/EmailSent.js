import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import emailLogo from '../../../public/assets/images/email.png';
import InnerBanner from '../../components/InnerBanner';

const EmailSent = () => (
    <div>
        <Helmet>
            <title>Enests | Check your Email</title>
            <meta property="og:title" content="Enests | Check your Email" />
        </Helmet>
        <Layout>
            <InnerBanner mainHeading={'Check your Email'} innerHeading={'Check your Email'}/>
            <section class="w-review-sec sec-pd">  
                <div class="container">
                    <div class="wd-wrapper">
                    <div class="form-box ar-submit">
                        <div class="sec-heading">
                                <div class="heading">
                                    <h2>Check your email to verify and publish your review</h2>
                                </div>
                                <div class="sub-heading">
                                    <p>We have sent you a verification email to info@gmail.com. Please click the link in the email to verify your account and verify your review submision</p>
                                </div>
                            </div>
                            <div class="f-data-wrapper wrapper-mg">
                                <div class="email-icon">
                                    <div class="img-wrapper">
                                        <img src={emailLogo} alt="Email Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    </div>
);

export default EmailSent;