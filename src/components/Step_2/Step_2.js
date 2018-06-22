import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class StepTwo extends Component {
  constructor() {
    super();

    this.state = {
      image: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buttonHandler = () => {
    const { image } = this.state;

    axios
      .post("/api/houses", { image })
      .then(response => console.log(response));
  };

  render() {
    return (
      <div>
        <div className="name">
          <h3>Image URL</h3>
          <input
            value={this.state.image}
            name="image"
            placeholder="Image URL"
            onChange={this.inputHandler}
          />
        </div>
        <Link to="/wizard/step_one">
          <button>Previous Step</button>
        </Link>
        <Link to="/wizard/step_three">
          <button onClick={this.buttonHandler}>Next Step</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { image } = state;
  return {
    image
  };
};

export default connect(mapStateToProps)(StepTwo);
