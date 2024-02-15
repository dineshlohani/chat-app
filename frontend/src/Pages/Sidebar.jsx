import React from "react";
import { MdDashboard } from "react-icons/md";
import { TfiBarChartAlt } from "react-icons/tfi";
import { BsBank } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsBootstrapFill } from "react-icons/bs";

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TfiBarChartAlt className="icon_header" /> BIBEBOO
        </div>
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <MdDashboard />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsBank />
            Bank
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <HiOutlineBuildingOffice2 />
            Insurance
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsBootstrapFill />
            Broker
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
