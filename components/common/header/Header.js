import React from 'react';

export default function Header() {
  
  return <nav className="nav" > 
    <div className="container">
      <a href="index.html" className="nav-logo">Solid Academy</a>
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item btn--call">
            <a href="tel:+996707629617" className="nav-link btn btn-brighred animate-y ">Позвонить</a>
          </li>
        </ul>
        <div className="menu-bars" id="toggle">
          <input type="checkbox" id="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </nav>;
}
