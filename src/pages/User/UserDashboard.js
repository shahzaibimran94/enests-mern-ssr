import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import reAthImg from '../../../public/assets/images/re-ath.jpg';
import listingLogo from '../../../public/assets/images/listing-logo.png'
import rvImg from '../../../public/assets/images/rv-img.jpg';
import loadable from '@loadable/component';
const Nav = loadable(() => import('react-bootstrap/Nav'), {ssr: true});
const NavItem = loadable(() => import('react-bootstrap/NavItem'), {ssr: true});
const NavLink = loadable(() => import('react-bootstrap/NavLink'), {ssr: true});
const TabContainer = loadable(() => import('react-bootstrap/TabContainer'), {ssr: true});
const TabContent = loadable(() => import('react-bootstrap/TabContent'), {ssr: true});
const TabPane = loadable(() => import('react-bootstrap/TabPane'), {ssr: true});

const UserDashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Enests | User Dashboard</title>
                <meta property="og:title" content="Enests | User Dashboard" />
            </Helmet>
            <Layout>
                <section className="us-dsb-sec sec-pd">
                    <div className="container">
                        <TabContainer defaultActiveKey="profile">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="dashb-nav">
                                        <div className="inb">
                                            <div className="img-holder">
                                                <img src={reAthImg} alt="" />
                                            </div>
                                            <div className="us-name">
                                                <h4>Naeem Sagir</h4>
                                            </div>
                                            <div className="us-bio">
                                                <p>Professional Web Developer and Designer Expert</p>
                                            </div>
                                        </div>

                                        <Nav variant="pills" className="flex-column">
                                            <NavItem>
                                                <NavLink eventKey="profile">My Profile</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink eventKey="listing">Listing</NavLink>
                                            </NavItem>
                                            <NavItem>

                                                <NavLink eventKey="reviews">Reviews</NavLink>
                                            </NavItem>
                                        </Nav>

                                        <span className="lgot-link"><a href="#" className="nav-link">Logout</a></span>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <TabContent>
                                            <TabPane eventKey="profile">
                                                <div className="te-wrapper">
                                                    <div className="tab-title">
                                                        <h2>My Profile</h2>
                                                    </div>
                                                    <div className="edit-wrapper">
                                                        <button className="edit-btn"><span className="edit-icon"><i className="fas fa-pen"></i></span> Edit</button>
                                                    </div>
                                                </div>
                                                <div className="pf-wrapper">
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Name</label>
                                                                <input type="text" className="form-control" value="Naeem Sagir" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Email Address</label>
                                                                <input type="email" className="form-control" value="naeem@gmail.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Phone</label>
                                                                <input type="text" className="form-control" value="+923048172731" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Website</label>
                                                                <input type="text" className="form-control" value="www.aamconsultants.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Industry</label>
                                                                <input type="text" className="form-control" value="Seo Services" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Bio</label>
                                                                <input type="text" className="form-control" value="Professional Web Developer and Designer Expert" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <label className="form-label">Address</label>
                                                                <input type="text" className="form-control" value="Sultan Mahmood Road Shalimar Town Baghbanpora Lahore" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btn-holder">
                                                        <button className="site-btn">Update</button>
                                                    </div>
                                                </div>
                                            </TabPane>
                                            <TabPane eventKey="listing">
                                                <div className="te-wrapper">
                                                    <div className="tab-title">
                                                        <h2>Listings</h2>
                                                    </div>
                                                    <div className="edit-wrapper">
                                                        <div className="flt-holder">
                                                            <select className="form-control" id="CategorySelect">
                                                                    <option>All</option>
                                                                    <option>Health</option>
                                                                    <option>Travel</option>
                                                                    <option>Food</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="listing-wrapper">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                <th scope="col" ><div style={{width:'105px'}}>image</div> </th>
                                                                <th scope="col" ><div style={{width:'230px'}}>title</div> </th>
                                                                <th scope="col" ><div style={{width:'115px'}}>last updated</div> </th>
                                                                <th scope="col" ><div style={{width:'70px'}}>status</div> </th>
                                                                <th scope="col" ><div style={{width:'110px'}}>actions</div> </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                <td scope="row">
                                                                    <div className="img-holder">
                                                                        <img src={listingLogo} alt="" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="title-txt-wrapper">
                                                                        <h4>AAM Consultants</h4>
                                                                        <span className="cs-clr">SEO Services Company</span>
                                                                        <p className="title-para">
                                                                        Wisdek's work has produced more than just additional traf
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="lst-update">
                                                                        <span className="cs-clr">2-04-2020</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="stu-wrapper">
                                                                        <span className="cs-clr">approved</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="act-wrapper">
                                                                        <span className="cs-clr"><i className="fas fa-pen"></i>Edit</span>
                                                                        <span className="cs-clr"><i className="fas fa-trash-alt"></i>Delete</span>
                                                                    </div>
                                                                </td>
                                                                </tr>
                                                                <tr>
                                                                <td scope="row">
                                                                    <div className="img-holder">
                                                                        <img src={listingLogo} alt="" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="title-txt-wrapper">
                                                                        <h4>AAM Consultants</h4>
                                                                        <span className="cs-clr">SEO Services Company</span>
                                                                        <p className="title-para">
                                                                        Wisdek's work has produced more than just additional traf
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="lst-update">
                                                                        <span className="cs-clr">2-04-2020</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="stu-wrapper">
                                                                        <span className="cs-clr">approved</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="act-wrapper">
                                                                        <span className="cs-clr"><i className="fas fa-pen"></i>Edit</span>
                                                                        <span className="cs-clr"><i className="fas fa-trash-alt"></i>Delete</span>
                                                                    </div>
                                                                </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </TabPane>
                                            <TabPane eventKey="reviews">
                                                <div className="te-wrapper">
                                                    <div className="tab-title">
                                                        <div className="heading-f">
                                                            <h2><span className="r-counter">4</span> Reviews by Amethyst Carly</h2>
                                                        </div>
                                                    </div>
                                                    <div className="edit-wrapper">
                                                        <div className="flt-holder">
                                                            <select className="form-control" id="CategorySelect">
                                                                    <option>All</option>
                                                                    <option>Health</option>
                                                                    <option>Travel</option>
                                                                    <option>Food</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-box user-review-box wrapper-mg">
                                                    <div className="review-box-inner">
                                                        <div className="rv-img-wrapper">
                                                            <div className="img-holder">
                                                                <img src={rvImg} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="review-content">
                                                            <div className="site-rat">
                                                                <div className="rev-site-title">
                                                                    <h4>FurnitureInFashion</h4>    
                                                                </div>
                                                                <div className="rating-holder">
                                                                    <div className="rating">
                                                                    <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rev-title">
                                                                <h3>Outstanding design with quallity</h3>
                                                            </div>
                                                            <div className="rev-content">
                                                                <p>
                                                                    Excellent product and fast shipping.  Will be doing business with them again
                                                                </p>
                                                            </div>
                                                            <div className="rev-btm-ftr">
                                                                <div className="date-holder">
                                                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                                                </div>
                                                                <div className="com-ftr-right">
                                                                <ul className="btm-list">
                                                                    <li className="share"><span className="com-ftr-icon"><i className="fas fa-share-alt"></i></span>Share</li>
                                                                    <li className="hlp-ful"><span className="com-ftr-icon"><i className="fas fa-thumbs-up"></i></span>Helpful</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-box user-review-box wrapper-mg">
                                                    <div className="review-box-inner">
                                                        <div className="rv-img-wrapper">
                                                            <div className="img-holder">
                                                                <img src={rvImg} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="review-content">
                                                            <div className="site-rat">
                                                                <div className="rev-site-title">
                                                                    <h4>FurnitureInFashion</h4>    
                                                                </div>
                                                                <div className="rating-holder">
                                                                    <div className="rating">
                                                                    <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rev-title">
                                                                <h3>Outstanding design with quallity</h3>
                                                            </div>
                                                            <div className="rev-content">
                                                                <p>
                                                                    Excellent product and fast shipping.  Will be doing business with them again
                                                                </p>
                                                            </div>
                                                            <div className="rev-btm-ftr">
                                                                <div className="date-holder">
                                                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                                                </div>
                                                                <div className="com-ftr-right">
                                                                <ul className="btm-list">
                                                                    <li className="share"><span className="com-ftr-icon"><i className="fas fa-share-alt"></i></span>Share</li>
                                                                    <li className="hlp-ful"><span className="com-ftr-icon"><i className="fas fa-thumbs-up"></i></span>Helpful</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-box user-review-box wrapper-mg">
                                                    <div className="review-box-inner">
                                                        <div className="rv-img-wrapper">
                                                            <div className="img-holder">
                                                                <img src={rvImg} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="review-content">
                                                            <div className="site-rat">
                                                                <div className="rev-site-title">
                                                                    <h4>FurnitureInFashion</h4>    
                                                                </div>
                                                                <div className="rating-holder">
                                                                    <div className="rating">
                                                                    <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star"></span>
                                                                        <span className="fa fa-star"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rev-title">
                                                                <h3>Outstanding design with quallity</h3>
                                                            </div>
                                                            <div className="rev-content">
                                                                <p>
                                                                    Excellent product and fast shipping.  Will be doing business with them again
                                                                </p>
                                                            </div>
                                                            <div className="rev-btm-ftr">
                                                                <div className="date-holder">
                                                                    <span><i className="far fa-clock"></i>22-02-2020</span>
                                                                </div>
                                                                <div className="com-ftr-right">
                                                                <ul className="btm-list">
                                                                    <li className="share"><span className="com-ftr-icon"><i className="fas fa-share-alt"></i></span>Share</li>
                                                                    <li className="hlp-ful"><span className="com-ftr-icon"><i className="fas fa-thumbs-up"></i></span>Helpful</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </div>
                            </div>
                        </TabContainer>
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default UserDashboard;