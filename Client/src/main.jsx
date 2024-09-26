import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Routes/Router.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap RouterProvider with Redux Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);