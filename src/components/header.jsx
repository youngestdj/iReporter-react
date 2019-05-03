import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { isLoggedIn, username } = props;
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">iReporter</div>
          {
            isLoggedIn ? (
              <>
                <ul className="links">
                  <li><a href="profile"><span className="username">{`@${username}`}</span></a></li>
                  <li><a href="logout">Logout</a></li>
                </ul>
                <select>
                  <option value="">Go to...</option>
                  <option value="">{username}</option>
                  <option value="">Logout</option>
                </select>
              </>
            ) : (
              <>
                <ul className="links">
                  <li><a href="/login">Login</a></li>
                  <li><a href="/signup">Signup</a></li>
                </ul>
                <select>
                  <option value="">Go to...</option>
                  <option value="">Login</option>
                  <option value="">Signup</option>
                </select>
              </>
            )
          }
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
};
Header.defaultProps = {
  isLoggedIn: false,
  username: ''
};
export default Header;
