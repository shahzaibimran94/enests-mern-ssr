import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import CompaniesListingFilter from '../../components/CompaniesListingFilters';
import CompaniesListingSubCategory from '../../components/CompaniesListingSubCategory';
import CompanyListItem from '../../components/CompanyListItem';

const companies = new Array(4).fill(0);
const CompaniesListing = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | Companies Listing</title>
                <meta property="og:title" content="Enests | Companies Listing" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'Companies Listing'} innerHeading={'Companies Listing'} />
                <section className="c-listing-wrapper sec-pd">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <aside className="c-listing-sidebar">
                                    <CompaniesListingFilter />
                                    <CompaniesListingSubCategory />
                                </aside>
                            </div>
                            <div className="col-lg-8">
                                <div className="hf-wrapper">
                                    <div className="heading-f">
                                        <h2>List of the Top Pakistan SEO Agencies</h2>
                                    </div>
                                    <div className="flt-holder">
                                        <select className="form-control" id="CategorySelect">
                                                <option>All</option>
                                                <option>Health</option>
                                                <option>Travel</option>
                                                <option>Food</option>
                                        </select>
                                    </div>
                                </div>
                                { companies.map((c, i) => (<CompanyListItem key={i}/>)) }
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>            
        </div>
    );
}

export default CompaniesListing;