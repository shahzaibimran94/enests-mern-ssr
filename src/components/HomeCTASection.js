import React from 'react';
import ctaArtImg from '../../public/assets/images/cta-art.png';
import { useHistory } from 'react-router-dom';

const HomeCTASection = () => {
    const history = useHistory();
    return (
        <section className="cta-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="sec-heading">
                            <div className="heading">
                                <h2>Want to add you business listing?</h2>
                            </div>
                            <div className="sub-heading">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="btn-holder">
                            <a href="" className="site-btn" onClick={() => history.push('/get-listed')}>Get Listed</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cta-art-holder">
                            <img src={ctaArtImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeCTASection;