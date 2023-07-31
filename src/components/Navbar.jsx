import React from 'react';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Avnish Kumar</div>
      <button className="get-users-btn" onClick={onGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;