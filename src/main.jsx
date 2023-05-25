import React from "react";
import ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./routes/routes";
import AuthProviders from "./AuthProvider/AuthProviders";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);