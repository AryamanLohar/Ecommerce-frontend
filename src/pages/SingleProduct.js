import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get similar products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/search-similar-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            className="card-img-top"
            src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${product._id}`}
            alt={product.name}
          />
        </div>
        <div className="col-md-6 text-center">
          <h1>Product details</h1>
          <h6>Name:{product?.name}</h6>
          <h6>Description:{product?.description}</h6>
          <h6>Category:{product?.category?.name}</h6>
          <h6>Price:₹{product?.price}</h6>
          <h6>Quantity:{product?.quantity}</h6>
          <button className="btn btn-primary ms-1">Add to cart</button>
        </div>
      </div>
      <hr></hr>
      <div className="row container">
        <h1>Similar Products</h1>
        {relatedProducts?.length < 1 && (
          <p className="text-center">No similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
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

                  <button className="btn btn-primary ms-1">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
