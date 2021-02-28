import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="purple" data-background-color="white" data-image="assets/img/sidebar-1.jpg">
        <div className="logo"><Link to="/" className="simple-text logo-normal">Creative Tim</Link></div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active  ">
              <Link className="nav-link" to="/dashboard">
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/user">
                <i className="material-icons">person</i>
                <p>User Profile</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/tables">
                <i className="material-icons">content_paste</i>
                <p>Table List</p>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/notify">
                <i className="material-icons">notifications</i>
                <p>Notifications</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;