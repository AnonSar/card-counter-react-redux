import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
