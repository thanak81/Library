import React from "react";

function Sidebar() {
  console.log("Sidebar")
    return (
      <div className="sidebar">
        <h2>Sidebar</h2>
        <div className="options">
          <span>Profile</span>
          <span>Setting</span>
          <span>Users</span>
        </div>
      </div>
    );
  }

  export default React.memo(Sidebar);