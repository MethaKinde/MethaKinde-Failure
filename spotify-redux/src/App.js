import React from 'react';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <MainPage />
      </div>
    </div>
  );
};

export default App;
