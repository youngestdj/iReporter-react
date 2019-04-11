import React from 'react';
import '../assets/css/style.css';

const Header = () => (
  <>
    <nav>
      <div className="container">
        <div className="logo">iReporter</div>
        <ul className="links">
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
        <select>
          <option value="">Go to...</option>
          <option value="">Login</option>
          <option value="">Signup</option>
        </select>
      </div>
    </nav>
  </>
);

export default Header;
