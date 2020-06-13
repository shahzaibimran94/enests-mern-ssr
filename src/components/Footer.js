import React from 'react';
import footerLogo from '../../public/assets/images/white-logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="bg-img overlay">
                <section className="main-footer sec-pd ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="ftr-logo">
                                    <img src={footerLogo} alt="" />
                                </div>
                                <div className="comp-text">
                                    <p>
                                    Constructive is an enhance development organization, made up of groups of individuals who are demonstrated in their businesses. All attempting to configuration, fabricate, transport, work, and keep up ventures everywhere throughout the USA.
                                    </p>
                                    <div className="ftr-slist">
                                        <ul className="social-list">
                                            <li><a href="#" className="facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                            <li><a href="#" className="twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#" className="instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                            <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="ftr-heading">
                                    <h5>useful links</h5>
                                </div>
                                <div className="ftr-menu">
                                    <ul className="menu-list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">contact</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">contact</a></li>
                                        <li><a href="#">About</a></li>
                                    
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="ftr-heading">
                                    <h5>helps</h5>
                                </div>
                                <div className="ftr-menu">
                                    <ul className="menu-list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">contact</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">contact</a></li>
                                        <li><a href="#">About</a></li>
                                    
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="ftr-heading">
                                    <h5>Newsletter</h5>
                                </div>
                                <div className="news-wrapper">
                                    <form action="#" className="site-subscribe" method="post">
                                        <input name="form_subscribe" placeholder="Enter your email" required="required" type="email" />
                                        <button type="submit">
                                            <i className="fas fa-paper-plane" aria-hidden="true"></i>
                                        </button>
                                    </form>
                                    <div className="ftr-cnt-info">
                                        <p><span><i className="fas fa-map-marker-alt"></i></span> 14 Stonehill Road, Farnworth, Bolton
                                            BL4 9TP, United Kingdom
                                        </p>
                                        <p><span><i className="fas fa-envelope"></i></span> info@muhammadaliboxing.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section className="copyright">
                            <div className="copyright-text">
                                <p className="md-text">
                                Copyright © {(new Date().getFullYear())}. All Rights Reserved. enests
                                </p>
                                <div className="btm-ft-list">
                                    <ul className="btm-menu-list">
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Advertise</a></li>
                                    </ul>
                                </div>
                            </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}

export default Footer;