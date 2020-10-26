import React, { useState, useEffect } from 'react';

import Search from "./components/SearchPage"
import './SearchPage.css'
import './HomePage.css';
import './App.css';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div>
      <HomePage/>
      <Search />
    </div>
  );
};

export default App;

