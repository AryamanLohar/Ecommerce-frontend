import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { toast } from "react-hot-toast";
import SearchForm from "../Form/SearchForm";
import useCategory from "../../hooks/useCategory";
import { CartContext } from "../../context/cart";
import { Badge } from "antd";
const Header = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const categories = useCategory();
  const [cart, setCart] = useContext(CartContext);

  const handleOnClickLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfull!!");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-center text-white"
        id="navBar"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Website
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchForm></SearchForm>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  id="home"
                >
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  role="button"
                >
                  Categories
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <Link className="dropdown-item" to={`/categories`}>
                      All categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <Link className="nav-link" to="/cart" id="features">
                    Cart
                  </Link>
                </Badge>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register" id="features">
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" id="features">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/login"
                          onClick={handleOnClickLogout}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
