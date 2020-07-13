import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './comp/Header/Home';
import Nav from './comp/Header/Nav';
import Login from './comp/Header/Login';
import Register from './comp/Header/Register';
import CakeOrder from './comp/Header/CakeOrder';
import Order from './comp/Header/Order';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/> 
    <Route path="/Login" exact component={Login}/>
    <Route path="/Register" exact component={Register}/>
    <Route path="/CakeOrder" exact component={CakeOrder}/>
    <Route path="/Order" exact component={Order}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
