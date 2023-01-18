import React from "react";

import "./CourierItemRow.css";

import CourierItemRowMenu from "./CouriersItemRowMenu";



const CourierItemRow = ({ courier }) => {

  return (
    <div className="couriers-item-row">
      <div className="couriers-item-row__col couriers-item-row__name">
        {courier["name"]}
      </div>
      <div className="couriers-item-row__col">{courier["type"]}</div>
      <div className="couriers-item-row__col">{courier["amount"]}</div>
      <div className="couriers-item-row__col">{courier["bank"]}</div>
      <div className="couriers-item-row__col">{courier["used_banks"]}</div>
      <div className="couriers-item-row__col">{courier["startedDay"]}</div>
      <div className="couriers-item-row__col">{courier["status"]}</div>
      {/* {console.log(courier)} */}
      <CourierItemRowMenu courierId={courier._id} courierName={courier["name"]}/>


    </div>
  );
};

export default CourierItemRow;
