import "./app.css";

import React, { useState } from "react";

import AuthOrApp from "../AuthOrApp/AuthOrApp";

//redux
import { store } from "../../store";
import { Provider } from "react-redux";

function App() {
  
  return (
    <Provider store={store}>

        <div className="App">
          <AuthOrApp />
        </div>

    </Provider>
  );
}

export default App;
