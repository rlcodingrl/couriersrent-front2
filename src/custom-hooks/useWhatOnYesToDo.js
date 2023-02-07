//redux
import { useDispatch, useSelector } from "react-redux";


import onClickDeleteHandler from "../onClickHandlers/onClickDeleteHandler";
import onClickReserveHandler from "../onClickHandlers/onClickReserveHandler";
import onClickUnreserveHandler from "../onClickHandlers/onClickUnreserveHandler";

const useWhatOnYesToDo = () => {
    const dispatch = useDispatch();

    const modalAction = useSelector(state=>state.modal.mode);
    const courierId = useSelector(state=>state.modal.courierId)
    const user = useSelector(state=>state.user)
    console.log('useWhatOnYesToDo')

    if (modalAction==='reserve') {
        console.log('reserve')
        return ()=>{onClickReserveHandler(dispatch,courierId,user)}  
    }
    if (modalAction==='unreserve') {
        console.log('unreserve')
        return ()=>{onClickUnreserveHandler(dispatch,courierId)}  
    }
    if (modalAction==='delete') { 
        console.log('delete')
        return ()=>{onClickDeleteHandler(dispatch,courierId)}  
    }

}

export default useWhatOnYesToDo