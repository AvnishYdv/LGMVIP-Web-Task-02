import React, { useState } from 'react';
import './App.css'; // You can create your custom styles here
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar onGetUsers={getUsers} />
      {loading ? <div className="loader">Loading...</div> : <UserGrid users={users} />}
    </div>
  );
};

export default App;
