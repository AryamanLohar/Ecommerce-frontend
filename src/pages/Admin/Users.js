import React from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";

const Users = () => {
  return (
    <>
      <Layout title={"Dashboard-All Users"}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            <div className="card w-7 p-3">Users</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
