import React from "react";
import "./MainPage.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "../Explore/Explore";
import Messages from "../Messages/Messages";
import Resources from "../Resources/Resources";
import Starred from "../Starred/Starred";
import Settings from "../Settings/Settings";
import ExploreOne from "../ExploreOne/ExploreOne";
import ExploreTwo from "../ExploreTwo/ExploreTwo";
import SubMenuOne from "../SubMenuOne/SubMenuOne";
import SubMenuTwo from "../SubMenuTwo/SubMenuTwo";

function MainPage() {
  return (
    <div className="mainPage">
      <Sidebar />
      <div className="pages">
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/explore" >
            <Route path="explore_1" element={<ExploreOne />} />
            <Route path="explore_2" element={<ExploreTwo />} />
          </Route>
          <Route path="/messages" element={<Messages />} />
          <Route path="/resources" >
            <Route path="subitem1" element={<SubMenuOne />} />
            <Route path="subitem2" element={<SubMenuTwo />} />
          </Route>
          <Route path="/starred" element={<Starred />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={""} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
