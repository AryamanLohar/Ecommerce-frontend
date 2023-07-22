import React from "react";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const getProductsbyCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsbyCategory();
  }, [params]);
  return (
    <Layout>
      <div className="container">
        <h1>Hello</h1>
        <h4>{category?.name}</h4>
        <h5>{products?.length} results found</h5>
        <div className="row">
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div key={p._id}>
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${p._id}`}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}....
                    </p>
                    <p className="card-text">₹{p.price}</p>
                    <button
                      className="btn btn-primary ms-1"
                      onClick={() => {
                        navigate(`/product/${p.slug}`);
                      }}
                    >
                      More details
                    </button>
                    <button className="btn btn-primary ms-1">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProducts;
