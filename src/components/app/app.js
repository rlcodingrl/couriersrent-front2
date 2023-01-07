import "./app.css";

import React, { useState } from "react";

import AuthOrApp from "../AuthOrApp/AuthOrApp";

//redux
import { store } from "../../store";
import { Provider } from "react-redux";

export const UserContext = React.createContext({});




function App() {
  const [user, setUser] = useState({ jwt: localStorage.getItem("jwt") });

  

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ user, setUser }}
      >
        <div className="App">
          <AuthOrApp />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
