import React from 'react';

const ContactUsDetail = (props) => {
    const { address, email, phone } = props;
    return (
        <div class="row">
            <div class="col-md-4 mg-btm">
                <div class="contact-box">
                    <div class="contact-box-inner">
                        <div class="contact-icon-holder">
                            <span class="icon-wrapper">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                        </div>
                        <div class="contact-txt">
                            <div class="contact-box-heading">
                                <h4>address</h4>
                            </div>
                            <div class="contact-info">
                                <p>
                                    { address }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mg-btm">
                <div class="contact-box">
                    <div class="contact-box-inner">
                        <div class="contact-icon-holder">
                            <span class="icon-wrapper">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                        <div class="contact-txt">
                            <div class="contact-box-heading">
                                <h4>email</h4>
                            </div>
                            <div class="contact-info">
                                <p>{ email }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mg-btm">
                <div class="contact-box ">
                    <div class="contact-box-inner">
                        <div class="contact-icon-holder">
                            <span class="icon-wrapper">
                                <i class="fas fa-phone-alt"></i>
                            </span>
                        </div>
                        <div class="contact-txt">
                            <div class="contact-box-heading">
                                <h4>Phone</h4>
                            </div>
                            <div class="contact-info">
                                <p>{ phone }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsDetail;