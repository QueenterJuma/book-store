import React from 'react';
import { MdPerson } from 'react-icons/md';
import NavigationItem from './NavigationItem';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <div className="navigation-item">
          <nav className="nav">
            <h1 className="cms">Bookstore CMS</h1>
            <NavigationItem />
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
