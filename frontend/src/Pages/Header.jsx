import React from "react";
import { TfiBarChartAlt } from "react-icons/tfi";
import {
  BsSearch,
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
} from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <div className="menu-icon">
        <TfiBarChartAlt className="icon" />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
