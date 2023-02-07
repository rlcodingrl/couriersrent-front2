import React from "react";

import "./Profile.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

//handlers
import changeWalletHandler from "../../../onClickHandlers/changeWalletHandler";

const Profile = () => {

  const dispatch = useDispatch();
  const [walletInput, setWalletInput] = useState('')

  const user = useSelector(state => state.user)

  return (
    <div className="profile">
      <div>
        This is profile of {user.name} id = {user.id}
      </div>
      <div>
        Wallet for payments is {user.wallet}
      </div>
      <div className="wallet-row">
        <button className="change-wallet-btn" onClick={()=>{
            changeWalletHandler(dispatch, user, walletInput, setWalletInput)                  
        }}>
          Change wallet
        </button>
        <input className="wallet-input" type="text" onChange={e=>setWalletInput(e.target.value)} value={walletInput}/>
      </div>
    </div>
  )
};

export default Profile;
