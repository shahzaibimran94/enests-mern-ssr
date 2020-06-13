import React from 'react';
import './Home.css';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import HomeMainBanner from '../../components/HomeMainBanner';
import HomeAboutSection from '../../components/HomeAboutSection';
import HomeCategorySection from '../../components/HomeCategorySection';
import HomeRecentReviews from '../../components/HomeRecentReviews';
import HomeCTASection from '../../components/HomeCTASection';
import HomeBlogSection from '../../components/HomeBlogSection';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>Enests | Home</title>
          <meta property="og:title" content="Enests | Home" />
        </Helmet>
        <Layout>
          <HomeMainBanner />
          <HomeAboutSection />
          <HomeCategorySection />
          <HomeRecentReviews />
          <HomeCTASection />
          <HomeBlogSection />
        </Layout>
      </div>
    );
  }
}

export default Home;
