import React from 'react';

const CompaniesListingSubCategory = () => {
    return (
        <div className="s-border-box">
            <div className="s-heading">
                <h4>Sub Category</h4>
            </div>
            <div className="s-sub-cat-wrapper">
                <ul className="sub-cat">
                    <li><a href="#"><span className="s-name">Football</span><span className="s-number">8</span> </a></li>
                    <li><a href="#"><span className="s-name">Cricket</span><span className="s-number">16</span> </a></li>
                    <li><a href="#"><span className="s-name">Hockey</span><span className="s-number">7</span> </a></li>
                    <li><a href="#"><span className="s-name">Tennis</span><span className="s-number">104</span> </a></li>
                    <li><a href="#"><span className="s-name">NBA</span><span className="s-number">55</span> </a></li>
                </ul>
            </div>
        </div>
    );
}

export default CompaniesListingSubCategory;