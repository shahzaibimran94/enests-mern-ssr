import React from 'react';
import { useHistory } from 'react-router-dom';
import aboutImg from '../../public/assets/images/abt-img.jpg';

const HomeAboutSection = () => {
    const history = useHistory();
    return (
        <section className="abt-us sec-pd">
            <div className="container">
                <div className="row align-center">
                    <div className="col-md-6">
                        <div className="img-frame-wrapper">
                            <div className="img-frame"></div>
                            <div className="img-holder img-effect">
                                <img src={aboutImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="abt-us-content">
                            <div className="heading">
                                <h2> <strong>enests</strong> Story So For...</h2>
                            </div>
                            <div className="content-details">
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="btn-holder">
                                <a href="" className="site-btn" onClick={() => history.push('/about')}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAboutSection;