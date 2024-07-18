import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 sidebar-title mt-4">STAYFLEX</h1> 
      <ul>
        <li className="sidebar-item">
          <i className="bi bi-house-door-fill me-2"></i> Dashboard
        </li>
        <li className="sidebar-item">
          <i className="bi bi-person-circle me-2"></i> Front Desk
        </li>
        <li className="sidebar-item">
          <i className="bi bi-person-fill me-2"></i> Guest
        </li>
        <li className="sidebar-item">
          <i className="bi bi-door-open me-2"></i> Room
        </li>
        <li className="sidebar-item">
          <i className="bi bi-file-earmark-text me-2"></i> Deal
        </li>
        <li className="sidebar-item">
          <i className="bi bi-currency-dollar me-2"></i> Rate
        </li>
      </ul>
      <style jsx>{`
        .sidebar-title {
          color: brown; /* Brown color for STAYFLEX */
        }
        
        .sidebar-item {
          margin-bottom: 1.5rem; /* Increased spacing between items */
          cursor: pointer; /* Change cursor to pointer */
        }

        .sidebar-item:hover {
          color: brown; /* Hover color for sidebar items */
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
