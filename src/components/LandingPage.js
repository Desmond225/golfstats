import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div className="landing-header">
        </div>
        <Grid className="landing-grid">
          <Cell col={12}>

             <div className="landing-banner">
                <h1>Golfers page</h1>
                <hr/>
             </div>
             <div className="landing-banner-right">
                <h1>Golfers page</h1>
                <hr/>
                <p>Golfers page is a platform to keep track of your golfing progress
                by using smart systems which will help you gain more insight
                in your abilities. Golfers page will allow you to register scores
                in a detailed way, which then returns an easy to interpret list
                of your strengths and weaknesses about your game.</p>
             </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default LandingPage;
