import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <div className="landing-header">
        </div>
        <Grid className="landing-grid">
          <Cell col={5}>
             <div className="landing-banner-left">
             <h1>Golfers page</h1>
             <hr/>
             <p>Golfers page is a platform to keep track of your golfing progress
             by using smart systems which will help you gain more insight
             in your abilities. Golfers page will allow you to register scores
             in a detailed way, which then returns an easy to interpret list
             of your strengths and weaknesses about your game.</p>

             </div>
             </Cell>
             <Cell col={3}>
             <div className="landing-banner-right">
                <div className="landing-logo-1">
                <i className="fas fa-golf-ball" aria-hidden="true"></i>
                </div>

                <div className="landing-logo-2">
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                </div>

                <div className="landing-logo-3">
                <i className="fas fa-dumbbell" aria-hidden="true"></i>
                </div>

                <div className="landing-logo-4">
                <i className="fas fa-chart-line" aria-hidden="true"></i>
                </div>

                </div>
                </Cell>
                <Cell col={4}>
                <div className="landing-logo-description">
                <h2>Manage scores</h2>
                <h2>Gain insight</h2>
                <h2>Practice better</h2>
                <h2>Improve</h2>
                </div>
          </Cell>
      </Grid>
      <div className="landing-detail-section">
</div>
      </div>


    )
  }
}

export default LandingPage;
