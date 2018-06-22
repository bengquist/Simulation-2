import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { inputHandler } from "../../redux/reducers/reducer";

class StepOne extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  render() {
    console.log(this.state);
    console.log(this.props.inputHandler);
    return (
      <div>
        <div className="name">
          <h3>Property Name</h3>
          <input
            name="name"
            placeholder="Name"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="address">
          <h3>Address</h3>
          <input
            name="address"
            placeholder="Address"
            onChange={e => this.setState({ address: e.target.value })}
          />
        </div>
        <div className="city">
          <h3>City</h3>
          <input
            name="city"
            placeholder="City"
            onChange={e => this.setState({ city: e.target.value })}
          />
        </div>
        <div className="state">
          <h3>State</h3>
          <input
            name="state"
            placeholder="State"
            onChange={e => this.setState({ state: e.target.value })}
          />
        </div>
        <div className="zip">
          <h3>Zip</h3>
          <input
            name="zip"
            placeholder="Zip"
            onChange={e => this.setState({ zip: e.target.value })}
          />
        </div>
        <Link to="/wizard/step_two">
          <button onClick={() => this.props.inputHandler(this.state)}>
            Next Step
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { inputHandler }
)(StepOne);
