import React from 'react';

export class Courses2 extends React.Component {
  render() {
    const course = this.props.course;
    const score = this.props.score;

    return (
      <div>
        <h1>Selected course is {course}</h1>
        <h1>Submitted score is {score}</h1>
      </div>
    );
  }
}
