import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

export const Navbar = () => {
  const { noOfItems } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Shopping Cart
        </a>
        <span className="text-white">
          <CartIcon />
          <b>
            {noOfItems} {noOfItems > 1 ? "items" : "item"}
          </b>
        </span>
      </div>
    </nav>
  );
};
