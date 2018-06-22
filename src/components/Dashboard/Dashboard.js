import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    this.getHouses();
  }

  getHouses() {
    axios.get("/api/houses").then(response => {
      this.setState({ houses: response.data });
    });
  }

  deleteHandler = id => {
    axios.delete(`/api/houses/${id}`).then(houses => console.log(houses));
    this.getHouses();
  };

  render() {
    let house = this.state.houses.map((val, i) => {
      return (
        <House
          key={i}
          house={val}
          getHouses={this.getHouses}
          deleteHandler={this.deleteHandler}
        />
      );
    });

    return (
      <div>
        {house}
        <Link to="/wizard/step_one">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}
