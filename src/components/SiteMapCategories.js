import React from 'react';

const SiteMapCategories = () => {
    return (
        <div class="col-md-4">
            <div class="s-border-box">
                <div class="s-heading">
                    <h4>Categories</h4>
                </div>
                <div class="s-sub-cat-wrapper">
                    <ul class="sub-cat">
                        <li><a href="#"><span class="s-name">Football</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">Cricket</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">Hockey</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">Tennis</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span> </a></li>
                        <li><a href="#"><span class="s-name">NBA</span><span class="rgt-icon"><i class="fas fa-chevron-right"></i></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SiteMapCategories;