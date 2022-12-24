import React from "react";
import "./Assets.css";

function Assets({ src, title, sub, ...props }) {
  return (
    <div className="assets">
      <div className="assets__name">
        <div className="assets__name-icon">
          <img src={src} alt="icon" />
          <div className="assets__name-text">
            <p className="assets__name-text_title">{title}</p>
            <p className="assets__name-text_sub">{sub}</p>
          </div>
        </div>
      </div>

      <div className="assets__balance">
        <p className="assets__balance-price">{props.balancePrice}</p>
        <p className="assets__balance-sub">{props.balanceSub}</p>
      </div>

      <div classname="assets__interest">
        <p className="assets__interest-price">{props.interestPrice}</p>
        <p className="assets__interest-sub">
          {props.interestSub} <span>Last 24 hours</span>
        </p>
      </div>

      <div className="assets__allocation">
        <p classname="assets__allocation-percent">{props.percent}</p>
      </div>
    </div>
  );
}

export default Assets;
