import React, {Component} from 'react';
import { Courses } from './Courses';
import { Courses2 } from './Courses2';

class Scores extends Component{
  constructor(props) {
    super(props);

    this.state = {value: '', course: ''};
    this.handleChange = this.handleChange.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    document.getElementById("demo").innerHTML = 'New score is' + this.state.value;
    event.preventDefault();
  }

  submitScore(e) {
    this.setState({
    score: e.target.value
    });
  }

  submitHcp(newHcp) {
    this.setState({
      Hcp: newHcp
    });
  }

  render() {
    return (
      <div>
        <h1>New score</h1>
          <form
          className="pa4"
          onSubmit={this.handleSubmit}
          >
              <label
              className="db fw4 lh-copy f5">
                Course
              <input 
              type="text" 
              value={this.state.value}
              onChange={this.handleChange}
              className="input-reset ba b--black-20 pa2 mb2 db w-10"
              />
              </label>

              <label
              className="db fw4 lh-copy f5">
              Score
                <input
                type="number"
                min="55"
                max="150"
                className="input-reset ba b--black-20 pa2 mb2 db w-10"
                value={this.state.value}
                onChange={this.handleChange}
                name="score"/>
              </label>

              <label
              className="db fw4 lh-copy f5">
              Handicap
                <input
                className="input-reset ba b--black-20 pa2 mb2 db w-10"
                type="number" step="0.1"
                min="-5"
                max="36"
                name="hcp" />
              </label>

                <input
                type="submit"
                value="Submit" />
          </form>
          <Courses2 course={this.state.course} score={this.state.score} />
          <p id="demo">
          </p>
      </div>
    )
  }
}

export default Scores;
