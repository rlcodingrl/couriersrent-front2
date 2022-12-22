import React from "react";

import "./FullInfoCourierBody.css";

const FullInfoCourierBody = ({ courierFullInfo }) => {

  if (!courierFullInfo) {return null} 

  return (
    <div className="full-info-body">
      <div className="full-info-1clm full-info-clm">
        <div className="full-info-line__description">Name</div>
        <div>{courierFullInfo.name}</div>
        <div className="full-info-line__description">Holder Name</div>
        <div>{courierFullInfo.holderName}</div>
        <div className="full-info-line__description">DOB (mm/dd/yyyy)</div>
        <div>{courierFullInfo.dob}</div>
        <div className="full-info-line__description">Cell Phone</div>
        <div>{courierFullInfo.cellPhone}</div>
        <div className="full-info-line__description">Street Address</div>
        <div>{courierFullInfo.address}</div>
      </div>
      <div className="full-info-2clm full-info-clm">
        <div className="full-info-line__description">Bank</div>
        <div>{courierFullInfo.bank}</div>
        <div className="full-info-line__description">Accounting number</div>
        <div>{courierFullInfo.accountingNumber}</div>
        <div className="full-info-line__description">Routing number</div>
        <div>{courierFullInfo.routingNumber}</div>
        <div className="full-info-line__description">Wire routing number</div>
        <div>{courierFullInfo.wireroutingNumber}</div>
        <div className="full-info-line__description">SSN</div>
        <div>{courierFullInfo.ssn}</div>
        <div className="full-info-line__description">EIN</div>
        <div>{courierFullInfo.ein}</div>
      </div>
      <div className="full-info-3clm full-info-clm">
        <div className="full-info-line__description">Pers/Bus</div>
        <div>{courierFullInfo.type}</div>
        <div className="full-info-line__description">Summ</div>
        <div>{courierFullInfo.amount}</div>
        <div className="full-info-line__description">Used Banks</div>
        <div>{courierFullInfo.used_banks}</div>
        <div className="full-info-line__description">Started day</div>
        <div>{courierFullInfo.startedDay}</div>
        <div className="full-info-line__description">Status</div>
        <div>{courierFullInfo.status}</div>
        <div className="full-info-line__description">Comment</div>
        <div>{courierFullInfo.comment}</div>
      </div>
      <div className="full-info-4clm full-info-clm">
        place for chat
      </div>
    </div>
  );
};

export default FullInfoCourierBody;
