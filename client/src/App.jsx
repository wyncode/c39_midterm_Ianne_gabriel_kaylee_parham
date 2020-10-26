import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CardPage from './components/CardPage';
import Search from "./components/SearchPage"
import './SearchPage.css'
import './HomePage.css';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={Search}  />
          <Route path="/card/" exact component={CardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

