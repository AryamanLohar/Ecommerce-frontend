import Layout from "../../components/layout/Layout";
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  //all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-product`);
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error displaying products!!");
    }
  };

  useEffect(() => {
    getAllProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Layout title={"Dashboard-All Products"}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            <div className="card w-7 p-3">All products</div>
            <div className=" d-flex">
              {products?.map((p) => (
                <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id}>
                  <div>
                    <div className="card m-2" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={`/api/v1/products/product-photo/${p._id}`}
                        alt={p.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllProduct;
