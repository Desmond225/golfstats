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
        <h1>New score</h1>
          <form
          className="pa4"
          onSubmit={this.handleSubmit}>
          <label
          className="db fw4 lh-copy f5">
            Date
          </label>
              <input
              className="input-reset ba b--black-20 pa2 mb2 db w-10"
              type="date"
              name="date" />

              <label
              className="db fw4 lh-copy f5">
                Course
              </label>
              <select>
                <option value="Yellow">Hoge Dijk yellow</option>
                <option value="White">Hoge Dijk white</option>
              </select>

              <label
              className="db fw4 lh-copy f5">
              Score
              </label>
                <input
                type="number"
                min="55"
                max="150"
                className="input-reset ba b--black-20 pa2 mb2 db w-10"
                value={this.state.value}
                onChange={this.handleScoreChange}
                name="score"/>
              <label
              className="db fw4 lh-copy f5">
              Handicap
              </label>
                <input
                className="input-reset ba b--black-20 pa2 mb2 db w-10"
                type="number" step="0.1"
                min="-5"
                max="36"
                name="hcp" />

                <input
                type="submit"
                value="Submit" />
          </form>
          <p id="testing"></p>
      </div>
    )
  }
}

export default Scores;
