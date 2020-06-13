import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../../layout/ClientLayout';
import InnerBanner from '../../components/InnerBanner';
import loadable from '@loadable/component';
const Nav = loadable(() => import('react-bootstrap/Nav'), {ssr: true});
const NavItem = loadable(() => import('react-bootstrap/NavItem'), {ssr: true});
const NavLink = loadable(() => import('react-bootstrap/NavLink'), {ssr: true});
const TabContainer = loadable(() => import('react-bootstrap/TabContainer'), {ssr: true});
const TabContent = loadable(() => import('react-bootstrap/TabContent'), {ssr: true});
const TabPane = loadable(() => import('react-bootstrap/TabPane'), {ssr: true});

const Categories = () => {
    const [key, setKey] = useState('first');
    return (
        <div>
            <Helmet>
                <title>Enests | Categories</title>
                <meta property="og:title" content="Enests | Categories" />
            </Helmet>
            <Layout>
                <InnerBanner mainHeading={'Categories'} innerHeading={'Categories'} />
                <section className="all-cate sec-pd">
                    <div className="container">
                        <TabContainer id="left-tabs-example" activeKey={key}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="cate-sidebar">
                                        <div className="cate-side-heading">
                                            <h4>View Category</h4>
                                        </div>
                                        <Nav variant="pills" className="flex-column hiden-mobile">
                                            <NavItem>
                                                <NavLink eventKey="first"><span className="cate-icon"><i className="far fa-futbol"></i></span>Sports</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink eventKey="second"><span className="cate-icon"><i className="far fa fa-briefcase"></i></span>Business</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink eventKey="third"><span className="cate-icon"><i className="far fa fa-paint-brush"></i></span>Art & Design</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink eventKey="forth"><span className="cate-icon"><i className="far fa fa-wine-glass-alt"></i></span>Food</NavLink>
                                            </NavItem>
                                        </Nav>
                                        <select class="form-control visible-mobile" id="cate-tab_selector" onChange={(e) => setKey(e.target.value)}>
                                            <option value="first">Sports</option>
                                            <option value="second">Business</option>
                                            <option value="third">Art & Design</option>
                                            <option value="forth">Food</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="sub-cate-content">
                                        <TabContent>
                                            <TabPane eventKey="first">
                                                <div className="cate-side-heading">
                                                    <h4>Sports</h4>
                                                </div>
                                                <div className="sub-cat-wraper">
                                                    <ul className="sub-cat-list">
                                                        <li><a href="#">Cricket</a></li>
                                                        <li><a href="#">Football</a></li>
                                                        <li><a href="#">Hockey</a></li>
                                                        <li><a href="#">Tennis</a></li>
                                                        <li><a href="#">Basketball</a></li>
                                                        <li><a href="#">Hockey</a></li>
                                                        <li><a href="#">Tennis</a></li>
                                                        <li><a href="#">Basketball</a></li>
                                                    </ul>
                                                </div>
                                            </TabPane>
                                            <TabPane eventKey="second">
                                                <div className="cate-side-heading">
                                                    <h4>Business</h4>
                                                </div>
                                                <div className="sub-cat-wraper">
                                                    <ul className="sub-cat-list">
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                            </TabPane>
                                            <TabPane eventKey="third">
                                                <div className="cate-side-heading">
                                                    <h4>Art & Design</h4>
                                                </div>
                                                <div className="sub-cat-wraper">
                                                    <ul className="sub-cat-list">
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                            </TabPane>
                                            <TabPane eventKey="forth">
                                                <div className="cate-side-heading">
                                                    <h4>Food</h4>
                                                </div>
                                                <div className="sub-cat-wraper">
                                                    <ul className="sub-cat-list">
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                        <li><a href="#"></a></li>
                                                    </ul>
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

export default Categories;