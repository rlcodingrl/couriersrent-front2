import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../app/app";
import { ifValidJwtFunc } from "../../services/auth/ifValidJwtFunc";
import Spinner from "../Spinner";

//redux
import { useSelector } from "react-redux";

const AuthOrApp = () => {

  const spinnerRedux = useSelector(state=>state.spinner)

  let { user, setUser, ifAuthenticated, setIfAuthenticated } =
    useContext(UserContext);


  useEffect(() => {
    ifValidJwtFunc(user.jwt, setIfAuthenticated, setUser);
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {ifAuthenticated ? (
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
