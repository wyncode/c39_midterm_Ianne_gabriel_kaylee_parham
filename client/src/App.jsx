import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CardPage from './components/CardPage';
import Search from "./components/SearchPage"
import './SearchPage.css'
import './HomePage.css';
import './App.css';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div>
      <CardPage />
      <HomePage/>
      <Search />
    </div>
  );
};

export default App;

