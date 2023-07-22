import React from "react";
import { SearchContext } from "../../context/SearchProduct";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [search, setSearch] = useContext(SearchContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/search-product/${search.keyword}`
      );
      setSearch({ ...search, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search.keyword}
            onChange={(e) =>
              setSearch({
                ...search,
                keyword: e.target.value,
              })
            }
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
