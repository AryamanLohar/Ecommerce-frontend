import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/User/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js";
import AdminPrivateRoute from "./components/Routes/AdminPrivateRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import Categories from "./pages/Admin/Categories.js";
import CreateProducts from "./pages/Admin/CreateProduct.js";
import Users from "./pages/Admin/Users.js";
import Profile from "./pages/User/Profile.js";
import Orders from "./pages/User/Orders.js";
import AllProduct from "./pages/Admin/AllProduct.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "./pages/Search.js";
import SingleProduct from "./pages/SingleProduct.js";
import CategoryPage from "./pages/CategoryPage.js";
import CategoryProducts from "./pages/CategoryProducts.js";
import CartPage from "./pages/CartPage.js";
import AdminProfile from "./pages/Admin/AdminProfile.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import VerifyEmail from "./pages/Auth/VerifyEmail.js";
import AdminOrders from "./pages/Admin/AdminOrders.js";
import VerifyPhone from "./pages/Auth/VerifyPhone.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route
          path="/product/:slug"
          element={<SingleProduct></SingleProduct>}
        ></Route>
        <Route
          path="/categories"
          element={<CategoryPage></CategoryPage>}
        ></Route>
        <Route
          path="/category/:slug"
          element={<CategoryProducts></CategoryProducts>}
        ></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/verify-email"
          element={<VerifyEmail></VerifyEmail>}
        ></Route>
        <Route
          path="/verify-phone"
          element={<VerifyPhone></VerifyPhone>}
        ></Route>
        {/*User Dashboard*/}
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
          <Route path="user/profile" element={<Profile></Profile>}></Route>
          <Route path="user/orders" element={<Orders></Orders>}></Route>
        </Route>
        {/*Admin Dashboard*/}
        <Route
          path="/dashboard"
          element={<AdminPrivateRoute></AdminPrivateRoute>}
        >
          <Route
            path="admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route
            path="admin/create-category"
            element={<Categories></Categories>}
          ></Route>
          <Route
            path="admin/create-product"
            element={<CreateProducts></CreateProducts>}
          ></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
          <Route
            path="admin/products"
            element={<AllProduct></AllProduct>}
          ></Route>
          <Route
            path="admin/product/:slug"
            element={<UpdateProduct></UpdateProduct>}
          ></Route>
          <Route
            path="admin/profile"
            element={<AdminProfile></AdminProfile>}
          ></Route>
          <Route
            path="admin/orders"
            element={<AdminOrders></AdminOrders>}
          ></Route>
        </Route>
        {/*Unexisting Path*/}
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
