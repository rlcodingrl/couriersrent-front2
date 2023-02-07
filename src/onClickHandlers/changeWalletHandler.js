import { setSpinnerTrue, setSpinnerFalse } from "../store/spinnerReducer"
import setWallet from "../services/users/setWallet"
import { ifValidJwtFunc } from "../services/auth/ifValidJwtFunc"
import { setAuthTrue } from "../store/ifAuthReducer"
import { setUserDataAction } from "../store/userReducer"

const changeWalletHandler = (dispatch, user, walletInput, setWalletInput) => {
    dispatch(setSpinnerTrue())
            setWallet(user.id,walletInput)
            .then(res=>{
              // console.log(res)           
            })
            .then(res=>{
              ifValidJwtFunc(dispatch, setAuthTrue, setUserDataAction)
            })
            .then(
                res=>{
                  dispatch(setSpinnerFalse())
                setWalletInput('');
                }
              )
}

export default changeWalletHandler