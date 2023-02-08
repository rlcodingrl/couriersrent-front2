import { setSpinnerTrue, setSpinnerFalse } from "../store/spinnerReducer"
import setBalance from "../services/users/setBalance"
import getUsers from "../services/users/getUsers"
import { setUsersListAction } from "../store/usersListReducer"

const changeBalanceHandler = (dispatch,user,newBalance, setNewBalance) => {
  dispatch(setSpinnerTrue())
  setBalance(user._id,newBalance).then(res=>{
    // console.log(res)
    getUsers().then( res => {
      dispatch(setSpinnerFalse())
      dispatch(setUsersListAction(res.data.users))
      setNewBalance('');
    }
  )
  })
}

export default changeBalanceHandler