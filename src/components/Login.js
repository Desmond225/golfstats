import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu,
  IconButton, CardText } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
      <div className="projects-grid">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#000', height:'176px',
          background:'url(https://thepacificsentinel.com/wp-content/uploads/2017/12/Target_Corporation_logo_vector.svg_.png) center/cover'}}><h1>Greens in regulation</h1></CardTitle>
          <CardText style={{height:'175px'}}>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways hit: 60%</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways missed left: 15%</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways missed right: 25%</li>
          </CardText>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#000', height:'176px',
          background:'url(https://thepacificsentinel.com/wp-content/uploads/2017/12/Target_Corporation_logo_vector.svg_.png) center/cover'}}><h1>Fairways in regulation</h1></CardTitle>
          <CardText style={{height:'175px'}}>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways hit: 60%</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways missed left: 15%</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways missed right: 25%</li>
          </CardText>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#000', height:'176px',
          background:'url(https://thepacificsentinel.com/wp-content/uploads/2017/12/Target_Corporation_logo_vector.svg_.png) center/cover'}}><h1>Short game saves</h1></CardTitle>
          <CardText style={{height:'175px'}}>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways hit: 60%</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways missed left: 15%</li>
          <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Fairways missed right: 25%</li>
          </CardText>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        </div>
      )

  } else if(this.state.activeTab === 1){
    return (
      <div className="projects-grid">
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://pbs.twimg.com/profile_images/76166699/django-logo-negative-box_400x400.png) center/cover'}}>
          Portfolio website</CardTitle>
          <CardText>
          Using my HTML, CSS, Python and Django skills, I was able to create my very
          first website, which I built with the help of a Udemy course. The website
          runs on Python 3.6, and was used as an introduction to my coding journey
          whilst practicing my programming skills.
          </CardText>
          <CardActions border>
          <Button colored href="https://github.com/Desmond225/Portfolio_done"
          target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height:'176px',
          background:'url(https://pbs.twimg.com/profile_images/76166699/django-logo-negative-box_400x400.png) center/cover'}}>
          Cake and bake</CardTitle>
          <CardText>
          This website runs on the Django/Python framework and displays a basic
          website about a hobbyist who is into baking desserts. The website itself
          never was polished, since I am planning to rebuild the website using React.
          </CardText>
          <CardActions border>
          <Button colored href="https://github.com/Desmond225/cake-bake"
          target="_blank" rel="noopener noreferrer">GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share' />
          </CardMenu>
        </Card>

        </div>
    )
  }
}

  render() {
    return (
    <div className="category-tabs">
    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
    <Tab>Statistics of player</Tab>
    <Tab>Statistics of PGA tour</Tab>
    </Tabs>
    <Grid>
    <Cell col={12}>
      <div className="content">{this.toggleCategories()}</div>
    </Cell>
    </Grid>
    </div>
  );
  }
}

export default Projects
