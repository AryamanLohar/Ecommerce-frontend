import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { AuthContext } from "../../context/auth";
const AdminDashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <>
      <Layout>
        <div className="container-fluid m-3 pd-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu></AdminMenu>
            </div>

            <div className="col-md-9">
              <div className="card w-7 p-3">
                <h1>Admin Name: {auth?.user?.name}</h1>
                <h3>Admin Email: {auth?.user?.email}</h3>
                <h3>Admin Phone: {auth?.user?.phone}</h3>
                <h3>Admin Address: {auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;
