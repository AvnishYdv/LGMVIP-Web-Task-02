import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <div className="user-name">{`${user.first_name} ${user.last_name}`}</div>
      <div className="user-email">{user.email}</div>
    </div>
  );
};

export default UserCard;
