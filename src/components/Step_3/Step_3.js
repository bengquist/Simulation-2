import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class StepThree extends Component {
  constructor() {
    super();

    this.state = {
      monthly_mortgage: 0,
      desired_rent: 0
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buttonHandler = () => {
    const { name, address, city, state, zip } = this.state;

    axios
      .post("/api/houses", { name, address, city, state, zip })
      .then(<Link to="/" />);
  };

  render() {
    return (
      <div>
        <h4>Recommended Rent: $0</h4>
        <div className="name">
          <h3>Property Name</h3>
          <input
            value={this.state.name}
            name="name"
            placeholder="Name"
            onChange={this.inputHandler}
          />
        </div>
        <div className="address">
          <h3>Address</h3>
          <input
            value={this.state.address}
            name="address"
            placeholder="Address"
            onChange={this.inputHandler}
          />
        </div>
        <Link to="/wizard/step_two">
          <button>Previous Step</button>
        </Link>
        <Link to="/">
          <button onClick={this.buttonHandler}>Complete</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    name,
    address,
    city,
    stateId,
    zip,
    image,
    monthly_mortgage,
    desired_rent
  } = state;

  return {
    name,
    address,
    city,
    stateId,
    zip,
    image,
    monthly_mortgage,
    desired_rent
  };
};

export default connect(mapStateToProps)(StepThree);
