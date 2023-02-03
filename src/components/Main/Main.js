import React from "react";
import { Route, Routes } from "react-router-dom";

import "./Main.css";

import FreeCouriers from "./Couriers/FreeCouriers";
import ReservedCouriers from "./Couriers/ReservedCouriers";
import Rules from "./Rules";
import Users from "./Users";
import Home from "./Home";
import Profile from "./Profile";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/couriers-free" 
          element={<FreeCouriers/>} />
        <Route
          path="/couriers-reserved"
          element={<ReservedCouriers />}
        />
        <Route path="/rules" element={<Rules />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Main;
