import React from 'react';
import Tabs from '../Tabs/Tabs';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Tabs />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
