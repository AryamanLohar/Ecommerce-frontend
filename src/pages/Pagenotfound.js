import React from "react";
import Layout from "../components/layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="container text-center">
        <h1 className="display-1">Oops!</h1>
        <h2 className="display-4">Page Not Found</h2>
        <p className="lead">The page you are looking for does not exist.</p>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
