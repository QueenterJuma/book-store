import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <div className="navigation-item">
          <nav className="nav">
            <h1 className="cms">Bookstore CMS</h1>
            <Link to="/" className="">
              Books
            </Link>
            <Link to="/categories" className="">
              Categories
            </Link>
          </nav>
        </div>
        <div className="mdperson">
          <MdPerson className="profile" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
