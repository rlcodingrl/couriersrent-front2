import React from "react";

import "./Profile.css";

import setWallet from "../../../services/users/setWallet";

import { useDispatch, useSelector } from "react-redux";
import { setSpinnerFalse, setSpinnerTrue  } from "../../../store/spinnerReducer";
import { useState } from "react";


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
            dispatch(setSpinnerTrue())
            setWallet(user.id,walletInput).then(res=>{
              console.log(res)
                dispatch(setSpinnerFalse())
                setWalletInput('');
            
            })
        }}>
          Change wallet
        </button>
        <input className="wallet-input" type="text" onChange={e=>setWalletInput(e.target.value)} value={walletInput}/>
      </div>
    </div>
  )
};

export default Profile;
