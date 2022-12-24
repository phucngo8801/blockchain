import React from "react";

import "./Notify.css";

function Notify({ status, action, time }) {
  return (
    <div className="notify">
      <div className="notify__activity">
        <p className="notify__activity-status">{status}</p>
        <p className="notify__activity-action">{action}</p>
        <p className="notify__activity-time">{time}</p>
      </div>
    </div>
  );
}

export default Notify;
