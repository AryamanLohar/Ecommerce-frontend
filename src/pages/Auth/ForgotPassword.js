import Layout from "../../components/layout/Layout";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
        email,
      });
      if (res?.data?.success === false) toast.error(res?.data?.message);
      else toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error("Error resetting password!!");
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
        <Link type="submit" className="btn btn-primary" to={"/login"}>
          Login
        </Link>
      </form>
    </Layout>
  );
};

export default ForgotPassword;
