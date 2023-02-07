import { setSpinnerTrue, setSpinnerFalse } from "../store/spinnerReducer";
import { setAuthTrue } from "../store/ifAuthReducer";
import { loginService } from "../services/auth/loginService";
import { setUserDataAction } from "../store/userReducer";

const onClickLoginHandler = async (e, dispatch, form, setShowInvPass ) => {

        dispatch(setSpinnerTrue())     
        e.preventDefault();
        let res = await loginService(form, dispatch, setAuthTrue, setUserDataAction);
        // console.log(res)
        if (res.success) {
          dispatch(setSpinnerFalse())
        }
        if (res.message==='Invalid username or password'||res.message==='User not found') {
          setShowInvPass(true)
          dispatch(setSpinnerFalse())
        }
        
      
}

export default onClickLoginHandler