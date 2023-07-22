import React from "react";
import Layout from "../components/layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const categories = useCategory();
  return (
    <Layout title={"All-categories"}>
      <div className="container">
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-6 mt-5 mb-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-warning">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
