import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto">
    <RouterProvider router={router} />
  </div>
);
