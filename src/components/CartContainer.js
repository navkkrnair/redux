import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Rupee } from "../icons";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, noOfItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  if (noOfItems < 1) {
    return (
      <section className="container">
        <header>
          <div className="position-absolute top-50 start-50 translate-middle">
            <h2 className="m-lg-4">
              <strong>Your cart</strong>
            </h2>
            <h4>is currently empty!</h4>
          </div>
        </header>
      </section>
    );
  }
  return (
    <>
      <section className="container">
        <header>
          <div className="text-center m-3">
            <h2>
              <strong>Your Cart</strong>
            </h2>
          </div>
        </header>
      </section>
      <section className="container text-center">
        {cartItems.map((item) => (
          <div className="row mt-1 mb-2 border rounded">
            <CartItem key={item.id} {...item} />
          </div>
        ))}
        <hr />
        <h4>
          <strong>
            {" "}
            Total: <Rupee />
            {totalAmount}
          </strong>
        </h4>
        <button
          type="button"
          className="btn btn-info text-danger"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </section>
    </>
  );
};

export default CartContainer;
