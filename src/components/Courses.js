import React from 'react';

export class Courses extends React.Component {
  constructor(props){
    super(props);

    this.changeCourse = this.changeCourse.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }

  changeCourse(s) {
    const course = s.target.value;
    this.props.onChange(course);
  }
  
  submitScore(x) {
    const score = x.target.value;
    this.props.onChange(score);
  }

  render() {
    return (
      <div>
        <select>
        id="course"
        onChange={this.changeCourse}>
          <option value="Yellow">Hoge Dijk Yellow</option>
          <option value="White">Hoge Dijk White</option>
        </select>

        <input
        type="number"
        min="55"
        max="150"
        className="input-reset ba b--black-20 pa2 mb2 db w-10"

        onChange={this.submitScore}
        name="score"/>

      </div>
    );
  }
}
