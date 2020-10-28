import React from 'react';
import CardPage from './components/CardPage';
import Search from "./components/SearchPage"
import './SearchPage.css'
import './HomePage.css';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from "./components/about"
import './about.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={Search}  />
          <Route path="/card/:id" exact component={CardPage} />
          <Route path="/about" exact component={AboutPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

