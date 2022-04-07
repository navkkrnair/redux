import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp, Rupee } from "../icons";

const CartItem = ({ id, title, price, image, amount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="p-2 col-6">
        <img
          src={image}
          style={{ width: "100px" }}
          className="m-1 pl-2 bg-light"
          alt=""
        />
        <p className="m-0 text-center">
          <strong>{title}</strong>
        </p>
        <p className="m-0">
          Price:
          <Rupee />
          <strong>{price}</strong>
        </p>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div className="col-4 m-5 p-5">
        <p className="m-0 p-0">
          <button
            className="btn m-0 p-0"
            onClick={() => dispatch(increase({ id }))}
          >
            <ChevronUp />
          </button>
        </p>
        <p className="m-0 p-0">{amount}</p>
        <button
          className="btn m-0 p-0"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </>
  );
};

export default CartItem;
