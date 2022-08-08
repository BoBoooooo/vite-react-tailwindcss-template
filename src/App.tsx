import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
    </>
  );
};

export default App;
