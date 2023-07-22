import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div>
          <h1>Admin Panel</h1>
        </div>
        <div className="list-group">
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action list-group-item-primary"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action list-group-item-secondary"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action list-group-item-secondary"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/profile"
            className="list-group-item list-group-item-action list-group-item-secondary"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
