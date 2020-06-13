import React from 'react';

const CompaniesListingFilter = () => {
    return (
        <div className="s-border-box">
            <div className="s-heading">
                <h4>Filter By</h4>
            </div>
            <div className="form-group">
                <select className="form-control" id="CategorySelect">
                    <option>Employees</option>
                    <option>0-10</option>
                    <option>11-20</option>
                    <option>21+</option>
                </select>
            </div>
            <div className="form-group">
                <select className="form-control" id="CategorySelect">
                    <option>Country</option>
                    <option>Pakistan</option>
                    <option>United State</option>
                    <option>China</option>
                </select>
            </div>
            <div className="form-group">
                <select className="form-control" id="CategorySelect">
                    <option>Sports</option>
                    <option>Health</option>
                    <option>Travel</option>
                    <option>Food</option>
                </select>
            </div>
            <div className="btn-holder">
                <button className="site-btn">Apply</button>
            </div>
        </div>
    );
}

export default CompaniesListingFilter;