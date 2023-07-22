import React from "react";
import Layout from "./../components/layout/Layout";
import { SearchContext } from "../context/SearchProduct";
import { useContext } from "react";
const Search = () => {
  const [search, setSearch] = useContext(SearchContext);
  return (
    <>
      <Layout title={"Search results"}>
        <div className="container">
          <div className="text-center">
            <h1>Search Results</h1>
            <h4>
              {search?.results.length < 1
                ? "No products found"
                : `${search?.results.length}`}
            </h4>
            <div className="d-flex flex-wrap">
              {search?.results.map((p) => (
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
                      <button className="btn btn-primary ms-1">
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
    </>
  );
};

export default Search;
