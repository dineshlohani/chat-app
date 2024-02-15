import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./Chatpage.css";

function Chatpage() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default Chatpage;
