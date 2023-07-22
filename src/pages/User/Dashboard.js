import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { AuthContext } from "../../context/auth";
import UserMenu from "../../components/layout/UserMenu";
const Dashboard = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <>
      <Layout>
        <div className="container-fluid m-3 pd-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu></UserMenu>
            </div>

            <div className="col-md-9">
              <div className="card w-7 p-3">
                <h1>User Name: {auth?.user?.name}</h1>
                <h3>User Email: {auth?.user?.email}</h3>
                <h3>User Phone: {auth?.user?.phone}</h3>
                <h3>User Address: {auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
