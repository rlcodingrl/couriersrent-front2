import { setSpinnerTrue } from "../../store/spinnerReducer"
import changeCourierStatus from "../couriers/changeCourierStatus"
import { setCourierCounterRedux } from "../../store/courierCounterReducer"
import { setModalFalse } from "../../store/modalReducer"

const onClickUnreserveHandler = (
    dispatch,
    courierId
    ) => {
    dispatch(setSpinnerTrue())
    changeCourierStatus(courierId,'Free', dispatch, setCourierCounterRedux).then(res=> {
        console.log(res);        
    })
    dispatch(setModalFalse())
}

export default onClickUnreserveHandler