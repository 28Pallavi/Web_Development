import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="d-flex flex-column mb-4 p-3 bg-white shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group me-3" style={{ width: '300px' }}>
                    <input
                        type="text"
                        placeholder="🔍 Search for rooms and offers"
                        className="form-control"
                    />
                </div>
                <div className="d-flex align-items-center">
                    <i className="bi bi-bell me-3" style={{ fontSize: '24px', cursor: 'pointer' }}></i>
                    <img
                        src="https://randomuser.me/api/portraits/women/1.jpg" 
                        alt="Profile"
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                    />
                </div>
            </div>
            <h2 className="text-xl font-weight-bold mb-3">Guests</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="me-3">
                    <button className="btn btn-warning me-2">Check In</button>
                    <button className="btn btn-secondary">Check Out</button>
                </div>
                <div className="input-group" style={{ width: '300px' }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text d-flex align-items-center">
                            <i className="bi bi-filter me-1" style={{ cursor: 'pointer' }}></i>
                            Filter
                        </span>
                    </div>
                    <div style={{ marginLeft: '10px' }} /> 
                    <input
                        type="text"
                        placeholder="🔍 Search by room number"
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
