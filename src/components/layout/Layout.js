import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="author" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header></Header>
      <main>
        <Toaster></Toaster>
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "mern stack",
  keywords: "mern, react, node, mongodb",
  author: "Mohit",
};

export default Layout;
