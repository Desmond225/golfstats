import React, {Component} from 'react';
import { Courses } from './Courses';
import { Courses2 } from './Courses2';

class Scores extends Component{
  constructor(props) {
    super(props);

    this.state = {course: 'Hoge dijk Yellow', score: '', hcp: ''};
    this.changeCourse = this.changeCourse.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  changeCourse(newCourse) {
    this.setState({
      course: "Hoge Dijk " + newCourse
    });
  }

  submitScore(e) {
    this.setState({
    score: e.target.value
    });
    document.getElementById("testing").innerHTML =
    `Your score is ${this.score}.`
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
          className="pa4">
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
              {/* <Courses onChange= {this.changeCourse} /> */}

              <label
              className="db fw4 lh-copy f5">
              Score
              </label>
                <input
                type="number"
                min="55"
                max="150"
                className="input-reset ba b--black-20 pa2 mb2 db w-10"
                value={this.state.score}
                onChange={this.submitScore}
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
          <Courses2 course={this.state.course} score={this.state.score} />
          <p id="testing">
          </p>
      </div>
    )
  }
}

export default Scores;
