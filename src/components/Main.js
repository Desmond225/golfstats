import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Scores from './Scores';
import Statistics from './Statistics';
import Login from './Login';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/scores" component={Scores} />
    <Route path="/statistics" component={Statistics} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Main;
