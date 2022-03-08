import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      qualification: "B.tech",
    };
  }

  nameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  qualificationChange = (event) => {
    this.setState({
      qualification: event.target.value,
    });
  };

  submitCLicked = (e) => {
    alert(
      `hello ${this.state.username} your qualification is ${this.state.qualification}`
    );
    
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitCLicked}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.nameChange}
          />
        </div>
        <div>
          <label>Qualification</label>
          <select
            value={this.state.qualification}
            onChange={this.qualificationChange}
          >
            <option value="bsc">bsc</option>
            <option value="bsccsit">bsc csit</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
