import React from 'react';
import {Helmet} from 'react-helmet';
import InnerBanner from '../../components/InnerBanner';
import Layout from '../../layout/ClientLayout';
import ContactUsDetail from '../../components/ContactUsDetail';
import ContactUsForm from '../../components/ContactUsForm';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Contact Us</title>    
                <meta property="og:title" content="Enests | Contact Us" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'Contact Us'} innerHeading={'Contact Us'} />
                <section class="contact-wrapper sec-pd">
                    <div class="container">
                        <ContactUsDetail 
                            address={'123 West Street, Melbourne Victoria 3000 Australia'} 
                            email={'info@example.com'} 
                            phone={'+61 3 8376 6284'}/>
                        <ContactUsForm />
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default ContactUs;