import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Component/Dashboard";
import AdvnDisAdv from "./AdvnDisAdv";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="benefits" element={<AdvnDisAdv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
