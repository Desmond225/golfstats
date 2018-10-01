import React, {Component} from 'react';




class Scores extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleScoreChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    let par = 71;
    let oldHcp = 36;
    let scoreToPar = (this.state.value - par);
    let stableford = (36 - scoreToPar);
    let newHcp = (oldHcp - (stableford - 36));
    event.preventDefault();
    document.getElementById("testing").innerHTML =
    `Your score is ${this.state.value}. par is ${par} so your score is
    ${scoreToPar} to par. Stableford points: ${stableford}. new hcp is ${newHcp}`
  }

  render() {
    return (
      <div>
        <h1>scoring page</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Score:
                <input type="number" value={this.state.value} onChange={this.handleScoreChange} name="score"/>
            </label>
            <br/>
            <label>
              Handicap:
                <input type="number" name="hcp" />
            </label>
                <input type="submit" value="Submit" />
          </form>
          <p id="testing"></p>
      </div>
    )
  }
}

export default Scores;
