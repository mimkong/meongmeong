import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { worker } from "./mocks/worker";

const root = ReactDOM.createRoot(document.getElementById("root"));
// 개발모드에서만 MSW 사용하기
if (process.env.NODE_ENV === "development") {
  worker.start();
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
