import React, { useEffect } from "react";

// components
import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import Modal from "../Modal";


import { ifValidJwtFunc } from "../../services/auth/ifValidJwtFunc";
import Spinner from "../Spinner";

//redux
import { setAuthTrue } from "../../store/ifAuthReducer";
import { useSelector, useDispatch } from "react-redux";
import { setUserDataAction } from "../../store/userReducer";

const AuthOrApp = () => {
  const dispatch = useDispatch();

  const spinnerRedux = useSelector(state=>state.spinner)
  const authRedux = useSelector(state=>state.ifAuth)
  const modalRedux = useSelector(state=>state.modal)

  useEffect(() => {
    ifValidJwtFunc(dispatch, setAuthTrue, setUserDataAction);
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {authRedux ? (
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      ) : (
        <Auth />
      )}
      {spinnerRedux ? <Spinner /> : null}
      {modalRedux ? <Modal /> : null}
      
    </>
  );
};
export default AuthOrApp;
