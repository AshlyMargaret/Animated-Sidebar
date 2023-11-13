import React from "react";
import "./MainPage.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Home from "../Home/Home";

function MainPage() {
  return (
    <div className="mainPage">
      <Sidebar />
      <Home />
    </div>
  );
}

export default MainPage;
