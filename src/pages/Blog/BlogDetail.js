import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import BlogDetailMainSection from '../../components/BlogDetailMainSection';
import BlogsSideSection from '../../components/BlogsSideSection';

const BlogDetail = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Blog Detail</title>
                <meta property="og:title" content="Enests | Blog Detail" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'Blog Detail'} innerHeading={'Blog Detail'} />
                <section class="blog-area sec-pd">
                    <div class="container">
                        <div class="row">
                            <BlogDetailMainSection />
                            <BlogsSideSection />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default BlogDetail;