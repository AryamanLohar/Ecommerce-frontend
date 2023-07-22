import Layout from "../../components/layout/Layout";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const VerifyPhone = () => {
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/generateOTP`, {
        phone,
      });
      if (res?.data?.success === false) toast.error(res?.data?.message);
      else toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error("Error verifying phone number!!");
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Verify Phone Number
        </button>
        <Link type="submit" className="btn btn-primary" to={"/login"}>
          Login
        </Link>
      </form>
    </Layout>
  );
};

export default VerifyPhone;
