import React from 'react';
import '../assets/css/first.css';

function firstContent() {
    return (
        <div>
            <div className="row wrapper">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <label className="container">
                                <input type="checkbox" checked="checked" />
                                <span className="checkmark one"></span>
                            </label>
                            <h5 className="card-title">Market Analysis</h5>
                            <p className="card-text">lorem ipsum</p>
                        </div>
                    </div>
                </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <label className="container">
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark two"></span>
                                </label>
                                <h5 className="card-title">Financial Advice</h5>
                                <p className="card-text">lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <label className="container">
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark three"></span>
                                </label>
                                <h5 className="card-title">Web Solution</h5>
                                <p className="card-text">lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default firstContent;