import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import PlayedRounds from './PlayedRounds';

class About extends Component {
  render() {
    return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
            style={{height:'200px'}}
          />
          </div>
            <h2 style={{paddingTop:'2em'}}>Overview</h2>
            <hr style={{borderTop:'3px solid #833FB2', width:'50%'}}/>

            <h5>Address</h5>
            <p>Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>123 456 456 7890</p>
            <h5>Email</h5>
            <p>d.van.zurk@gmail.com</p>
            <h5>Web</h5>
            <p>coming soon!</p>
            <hr style={{borderTop:'3px solid #833FB2', width:'50%'}}/>

        </Cell>
        <Cell className="resume-right-col"col={8}>
          <h2>Played rounds</h2>
          <hr style={{borderTop:'3px solid #e22947'}}/>

          <PlayedRounds
          startYear={2011}
          endYear={2016}
          schoolName="Hogeschool van Amsterdam"
          schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the"
          />

        </Cell>
      </Grid>
    </div>
  );
  }
}

export default About
