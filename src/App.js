import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration:'none',
              color:'white'}} to="/">My portfolio</Link>} scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/About">About</Link>
                      <Link to="/Scores">Scores</Link>
                      <Link to="/Statistics">Statistics</Link>
                      <Link to="/Login">Login</Link>
                      
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration:'none',
              color:'black'}} to="/">My portfolio</Link>}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Scores">Scores</Link>
                  <Link to="/Statistics">Statistics</Link>
                  <Link to="/Login">Login</Link>
              </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
