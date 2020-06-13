import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import SiteMapCategories from '../../components/SiteMapCategories';
import SiteMapBlog from '../../components/SiteMapBlog';
import SiteMapQuickLinks from '../../components/SiteMapQuickLinks';

const SiteMap = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Site Map</title>
                <meta property="og:title" content="Enests | Site Map" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'Site Map'} innerHeading={'Site Map'} />
                <section class="sitemap-wrapper sec-pd">
                    <div class="container">
                        <div class="row">
                            <SiteMapCategories />
                            <SiteMapBlog />
                            <SiteMapQuickLinks />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default SiteMap;