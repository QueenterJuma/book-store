import React from 'react';
import { MdPerson } from 'react-icons/md';
import NavigationItem from './NavigationItem';

function Navigation() {
  return (
    <nav className="navigation">
      <div
        className="navigation-item"
      >
        <h1 className="cms">Bookstore CMS</h1>
        <NavigationItem />
      </div>
      <div>
        <MdPerson className="profile" />
      </div>
    </nav>
  );
}

export default Navigation;
