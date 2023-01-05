import Header from "../Header";
import Main from "../Main";
import Auth from "../Auth";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../app/app";
import { ifValidJwtFunc } from "../../services/auth/ifValidJwtFunc";
import Spinner from "../Spinner";

//redux
import { useSelector } from "react-redux";

export const spinnerContext = React.createContext(false);

const AuthOrApp = () => {

  const spinnerRedux = useSelector(state=>state.spinner)

  let { user, setUser, ifAuthenticated, setIfAuthenticated } =
    useContext(UserContext);

  // console.log(ifAuthenticated);

  useEffect(() => {
    ifValidJwtFunc(user.jwt, setIfAuthenticated, setUser);
    // eslint-disable-next-line
  }, []);
  const [spinner, setSpinner] = useState(false);

  return (
    <>
      <spinnerContext.Provider value={setSpinner}>
        {ifAuthenticated ? (
          <React.Fragment>
            <Header />
            <Main />
          </React.Fragment>
        ) : (
          <Auth setIfAuthenticated={setIfAuthenticated} />
        )}
        {spinner ? <Spinner /> : null}
        {spinnerRedux ? <Spinner /> : null}
      </spinnerContext.Provider>
    </>
  );
};
export default AuthOrApp;
