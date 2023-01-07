import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../app/app";
import { ifValidJwtFunc } from "../../services/auth/ifValidJwtFunc";
import Spinner from "../Spinner";

//redux
import { setAuthFalse, setAuthTrue } from "../../store/ifAuthReducer";
import { useSelector, useDispatch } from "react-redux";

const AuthOrApp = () => {
  const dispatch = useDispatch();

  const spinnerRedux = useSelector(state=>state.spinner)
  const authRedux = useSelector(state=>state.ifAuth)


  let { user, setUser, ifAuthenticated, setIfAuthenticated } =
    useContext(UserContext);


  useEffect(() => {
    ifValidJwtFunc(user.jwt, dispatch, setAuthTrue, setUser);
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
        <Auth setIfAuthenticated={setIfAuthenticated} />
      )}
      {spinnerRedux ? <Spinner /> : null}
    </>
  );
};
export default AuthOrApp;
