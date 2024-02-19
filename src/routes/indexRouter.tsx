import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";

import React from "react";
import Home from "../../pages/home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
    </Route>
  )
);
