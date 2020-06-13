import React from 'react';
import ContactUsMap from './ContactUsMap';

const ContactUsForm = () => {
    return (
        <div>
            <div class="sec-heading wrapper-mg">
                <div class="heading">
                    <h2>Get In <strong>Touch</strong> </h2>
                </div>
            </div>
            <section class="contact-from-wrapper wrapper-mg">
                <div class="row">
                    <div class="col-lg-7">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Email Address</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Phone</label>
                                        <input type="number" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label">Subject</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label">Your Message</label>
                                        <textarea class="form-control" id="GeneInforSummary" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="site-btn">Submit</button>
                        </form>
                    </div>
                    <ContactUsMap />
                </div>
            </section>
        </div>
    );
}

export default ContactUsForm;