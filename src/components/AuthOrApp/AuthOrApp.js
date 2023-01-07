import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext, useEffect } from "react";

import { ifValidJwtFunc } from "../../services/auth/ifValidJwtFunc";
import Spinner from "../Spinner";

//redux
import { setAuthFalse, setAuthTrue } from "../../store/ifAuthReducer";
import { useSelector, useDispatch } from "react-redux";
import { setUserDataAction } from "../../store/userReducer";

const AuthOrApp = () => {
  const dispatch = useDispatch();

  const spinnerRedux = useSelector(state=>state.spinner)
  const authRedux = useSelector(state=>state.ifAuth)
  const user = useSelector(state=>state.user)

  useEffect(() => {
    ifValidJwtFunc(user.jwt, dispatch, setAuthTrue, setUserDataAction);
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
    </>
  );
};
export default AuthOrApp;
