import { setSpinnerTrue } from "../../store/spinnerReducer"
import changeCourierStatus from "../couriers/changeCourierStatus"
import { setCourierCounterRedux } from "../../store/courierCounterReducer"
import { setModalFalse } from "../../store/modalReducer"

const onClickReserveHandler = (
    dispatch,
    courierId,
    user
    ) => {
    dispatch(setSpinnerTrue())
    changeCourierStatus(courierId,user.name, dispatch,setCourierCounterRedux)
    dispatch(setModalFalse())
}

export default onClickReserveHandler