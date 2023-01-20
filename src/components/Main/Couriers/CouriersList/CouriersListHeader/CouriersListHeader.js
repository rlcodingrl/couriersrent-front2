import React from "react";

import "./CouriersListHeader.css";

const CouriersListHeader = () => {
  return (
    <div className="couriers-list-header">
      <div className="couriers-list-header__wrapper">
        <div className="couriers-list-header__col couriers-list-header__name">
          Name
        </div>
        <div className="couriers-list-header__col">Pers/Bus</div>
        <div className="couriers-list-header__col">Summ</div>
        <div className="couriers-list-header__col">Bank</div>
        <div className="couriers-list-header__col">Used Banks</div>
        <div className="couriers-list-header__col">Started day</div>
        <div className="couriers-list-header__col">Status</div>
      </div>
      
    </div>
  );
};

export default CouriersListHeader;
