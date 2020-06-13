import React from 'react';
import {Helmet} from 'react-helmet';
import './GetListed.css';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import GeneralInformation from '../../components/GetListedGeneralInformation';
import GetListedLogo from '../../components/GetListedLogo';
import GetListedLocation from '../../components/GetListedLocation';
import GetListedDetail from '../../components/GetListedDetail';
import GetListedSocialInfo from '../../components/GetListedSocialInfo';

const GetListed = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Get Listed</title>
                <meta property="og:title" content="Enests | Get Listed" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'Get Listed'} innerHeading={'Get Listed'} />
                <section className="glisted-sec sec-pd">  
                    <div className="container">
                        <div className="wd-wrapper">
                            <GeneralInformation />
                            <GetListedLogo description={'Write Something General Information About Your Listing'} />
                            <GetListedLocation />
                            <GetListedDetail />
                            <GetListedSocialInfo />
                        </div>
                    </div>
                </section>
            </Layout>            
        </div>
    );
}

export default GetListed;