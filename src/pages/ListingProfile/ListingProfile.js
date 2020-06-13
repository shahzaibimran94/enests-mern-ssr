import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import ListingProfileBanner from '../../components/ListingProfileBanner';
import ListingProfileMainSection from '../../components/ListingProfileMainSection';
import ListingProfileSideSection from '../../components/ListingProfileSideSection';

const ListingProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Listing Profile</title>
                <meta property="og:title" content="Enests | Listing Profile" />
            </Helmet>
            <Layout>        
                <ListingProfileBanner />
                <section className="main-content sec-pd">
                    <div className="container">
                        <div className="row">
                            <ListingProfileMainSection />
                            <ListingProfileSideSection />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default ListingProfile;