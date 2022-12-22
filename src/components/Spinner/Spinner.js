import React from "react";

import Pulse from "./Pulse.svg"
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner-img" src={Pulse} alt="" />
    </div>
  );
};

export default Spinner;
