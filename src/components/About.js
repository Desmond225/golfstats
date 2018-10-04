import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import PlayedRounds from './PlayedRounds';



class About extends Component {
  render() {
    return (
    <div>
      <div className="banner">
      <h4 className="banner-username">Username</h4>
      </div>
      <Grid>
        <Cell col={3}>
          <div className="about">

            <h2 style={{paddingTop:'10px'}}>Overview</h2>

            <h5>Rounds</h5>
            <h5>Statistics</h5>
            <h5>Equipment</h5>
            <h5>History</h5>
          </div>
        </Cell>
        <Cell className="resume-right-col"col={9}>
          <h2>Played rounds</h2>
          <hr style={{borderTop:'3px solid #e22947'}}/>

          <PlayedRounds
          />

        </Cell>
      </Grid>
    </div>
  );
  }
}

export default About
