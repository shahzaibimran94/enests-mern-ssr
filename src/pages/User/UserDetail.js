import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import UserDetailBanner from '../../components/UserDetailBanner';
import UserDetailMainSection from '../../components/UserDetailMainSection';
import UserDetailSideSection from '../../components/UserDetailSideSection';

const UserDetail = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | User</title>
                <meta property="og:title" content="Enests | User" />
            </Helmet>
            <Layout>    
                <UserDetailBanner />
                <section className="main-content sec-pd">
                    <div className="container">
                        <div className="row">
                            <UserDetailMainSection />
                            <UserDetailSideSection />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default UserDetail;