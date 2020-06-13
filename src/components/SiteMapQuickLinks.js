import React from 'react';

const SiteMapQuickLinks = () => {
    return (
        <div class="col-md-4">
            <div class="s-border-box">
                <div class="s-heading">
                    <h4>Quick links</h4>
                </div>
                <div class="s-sub-cat-wrapper">
                    <ul class="sub-cat">
                        <li><a href="#"><span class="s-name">Home</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">About</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">Contact</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">Advertisement</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">Login</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SiteMapQuickLinks;