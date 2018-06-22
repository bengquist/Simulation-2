import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import StepOne from "../Step_1/Step_1";
import StepTwo from "../Step_2/Step_2";
import StepThree from "../Step_3/Step_3";

export default class Wizard extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Add New Listing</h1>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
        <Route path="/wizard/step_one" component={StepOne} />
        <Route path="/wizard/step_two" component={StepTwo} />
        <Route path="/wizard/step_three" component={StepThree} />
      </div>
    );
  }
}
