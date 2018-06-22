import React from "react";
import axios from "axios";

export default props => {
  const { id, name, address, city, state, zip } = props.house;

  return (
    <div>
      <p>Property Name: {name}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>

      <button onClick={() => props.deleteHandler(id)} className="delete-btn">
        X
      </button>
    </div>
  );
};
