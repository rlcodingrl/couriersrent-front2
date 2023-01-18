const onClickReserveHandler = (
    dispatch,
    setSpinnerTrue,
    changeCourierStatus,
    courierId,
    user,
    setCourierCounter
    ) => {
    dispatch(setSpinnerTrue())
    changeCourierStatus(courierId,user.name,setCourierCounter)
}

export default onClickReserveHandler