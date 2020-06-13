import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import BlogsListing from '../../components/BlogsListing';
import BlogsSideSection from '../../components/BlogsSideSection';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Blogs</title>
                <meta property="og:title" content="Enests | Blogs" />
            </Helmet>
            <Layout>        
                <InnerBanner mainHeading={'Blogs'} innerHeading={'Blogs'} />
                <section className="blog-area sec-pd">
                    <div className="container">
                        <div className="row">
                            <BlogsListing />
                            <BlogsSideSection />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default Blogs;