import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";

import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <Link to='/' className="sidebar__head">
          <div className="sidebar__head-logo">
            <img src={images.DynamicIcon} alt="dynamicicon" />
          </div>

          <div className="sidebar__head-text">
            <h3 className="sidebar__head-text_title">Dynamic</h3>
            <p className="sidebar__head-text_desc">Put your funds to work</p>
          </div>
        </Link>

        <ul className="sidebar__list">
          <Link to='/' className="sidebar__list-item">
            <img src={images.HomeIcon} alt="homeicon" />
            <p className="sidebar__list-item-link">
              Home
            </p>
          </Link>
          <Link to="/vaults" className="sidebar__list-item">
            <img src={images.VaultsIcon} alt="VaultsIcon" />
            <p  className="sidebar__list-item-link">
              Vaults
            </p>
          </Link>
          <Link to="/swap" className="sidebar__list-item">
            <img src={images.TransferIcon} alt="TransferIcon" />
            <p  className="sidebar__list-item-link">
              Swap
            </p>
          </Link>
          <Link  to="/pay" className="sidebar__list-item">
            <img src={images.SwapIcon} alt="SwapIcon" />
            <p to="/pay" className="sidebar__list-item-link">
              Pay
            </p>
          </Link>
          <li className="sidebar__list-item">
            <img src={images.MoreIcon} alt="MoreIcon" />
            <p className="sidebar__list-item-link">
              More
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
