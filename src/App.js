import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import '../public/css/bootstrap.css';
import '../public/css/main.css';
import '../public/assets/fontawesome/css/all.css';
import "../public/css/owl.carousel.min.css";
import "../public/css/owl.theme.default.min.css";
import $ from 'jquery';

// import 'react-bootstrap';
// import "../public/assets/bootstrap/js/bootstrap.js";
// import 'popper.js/dist/umd/popper.min';
// import OwlCarousel from 'react-owl-carousel';
// import '../public/js/main';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Categories from './pages/Categories/Categories';
import GetListed from './pages/GetListed/GetListed';
import WriteReview from './pages/WriteReview/WriteReview';
import CompaniesListing from './pages/CompaniesListing/CompaniesListing';
import ListingProfile from './pages/ListingProfile/ListingProfile';
import UserDetail from './pages/User/UserDetail';
import Blogs from './pages/Blog/Blogs';
import BlogDetail from './pages/Blog/BlogDetail';
import UserDashboard from './pages/User/UserDashboard';
import ContactUs from './pages/ContactUs/ContactUs';
import EmailSent from './pages/Email/EmailSent';
import SiteMap from './pages/SiteMap/SiteMap';
import Page404 from './pages/Page404';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/categories" component={Categories} />
    <Route path="/get-listed" component={GetListed} />
    <Route path="/write-a-review" component={WriteReview} />
    <Route path="/companies-listing" component={CompaniesListing} />
    <Route path="/listing-profile" component={ListingProfile} />
    <Route path="/user" component={UserDetail} />
    <Route path="/blogs" component={Blogs} />
    <Route path="/blog-detail" component={BlogDetail} />
    <Route path="/user-dashboard" component={UserDashboard} />
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/site-map" component={SiteMap} />
    <Route path="/email-sent" component={EmailSent} />
    <Route component={Page404} />
  </Switch>
);

export default App;
