import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <>
        <div className="text-center">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="list-group">
            <NavLink
              to="/dashboard/user/profile"
              className="list-group-item list-group-item-action"
            >
              Profile
            </NavLink>
            <NavLink
              to="/dashboard/user/orders"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              Orders
            </NavLink>
          </div>
        </div>
      </>
    </>
  );
};

export default UserMenu;
