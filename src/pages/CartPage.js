import React, { useContext } from "react";
import Layout from "./../components/layout/Layout";
import { AuthContext } from "../context/auth";
import { CartContext } from "../context/cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
const CartPage = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);
  const navigate = useNavigate();

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  //place order
  const handlePlaceOrder = async () => {
    try {
      const buyerID = auth?.user?._id;
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/place-order`, {
        cart,
        buyerID,
      });
      if (res?.data?.success) toast.success(res?.data?.message);
      else toast.error(res?.data?.message);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center bg-light">
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "Please Login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            {cart?.map((p) => (
              <div className="row mb-2 card flex-row">
                <div className="col-md-4">
                  <img
                    className="card-img-top"
                    src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${p._id}`}
                    alt={p.name}
                  />
                </div>
                <div className="col-md-8">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)}</p>
                  <p>₹{p.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h4>Cart Summary</h4>
            <h4>Total : ₹{totalPrice()}</h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current address</h4>
                  <h4>{auth?.user?.address}</h4>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update address
                  </button>
                </div>
              </>
            ) : (
              <div>
                {auth?.token ? (
                  <>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/dashboard/user/profile", { state: "/cart" })
                      }
                    >
                      Update Address
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login
                  </button>
                )}
              </div>
            )}
          </div>
          {cart?.length ? (
            <button
              className="btn btn-outline-warning"
              onClick={handlePlaceOrder}
              disabled={!auth?.user?.address}
            >
              Place Order
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
