import React from "react";

import "./CouriersList.css";

import CourierListHeader from "./CouriersListHeader/CouriersListHeader";
import CourierListBody from "./CouriersListBody/CouriersListBody";

const CouriersList = () => {
  return (
    <div className="couriers-list">
      <CourierListHeader />
      <CourierListBody/>
    </div>
  );
};

export default CouriersList;
