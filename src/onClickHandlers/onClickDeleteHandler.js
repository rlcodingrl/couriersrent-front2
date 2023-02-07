import { setSpinnerTrue } from "../store/spinnerReducer"
import deleteCourier from "../services/couriers/deleteCourier"
import { setCourierCounterRedux } from "../store/courierCounterReducer"
import { setModalFalse } from "../store/modalReducer"

const onClickDeleteHandler = (
    dispatch,
    courierId
    ) => {
    dispatch(setSpinnerTrue())
    deleteCourier(courierId, dispatch, setCourierCounterRedux)
    dispatch(setModalFalse())
}

export default onClickDeleteHandler