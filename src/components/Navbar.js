import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaSearchDollar } from "react-icons/fa";
import { FiCornerUpLeft } from "react-icons/fi";
import { BsArrowDownLeftSquareFill } from "react-icons/bs";
import Coins from "./Coins";

const Navbar = () => {
  return (
    <div className="Nav-container">
      <Link className="link" style={{ color: "#18191b" }} to="/" element={<Coins />}>
        <BsArrowDownLeftSquareFill className="backIcon" />
      </Link>

      <h1 className="navHeading">
        Crypto <span>Labs</span>
      </h1>
      <FaSearchDollar className="searchIcon" />
    </div>
  );
};

export default Navbar;
