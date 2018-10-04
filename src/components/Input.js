import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', course: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleChangeCourse(event) {
    this.setState({course: event.target.value});
  }


  handleSubmit(event) {
    document.getElementById("demo").innerHTML = 'The score you submitted was: ' + this.state.value +
    'on course ' + this.state.course;
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <h1>Submit new score</h1>
      <form 
        className="pa4"
        onSubmit={this.handleSubmit}>
        <label>
          Score:
          <input 
          className="db fw4 lh-copy f5"
          min="55"
          max="150"
          name="score"
          type="number" 
          value={this.state.value} 
          onChange={this.handleChange} />
        </label>
        <label>
          Course:
          <input
            className="db fw4 lh-copy f5"
            type="text"
            name="course"
            value={this.state.course}
            onChange={this.handleChangeCourse}
          />
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


        <input type="submit" value="Submit" />
      </form>
      <p id="demo"></p>
      </div>
    );
  }
}

export default Input