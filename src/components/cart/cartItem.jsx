import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { handleIncrement, handleDecrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt={title}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none blue">
          <strong>Product: </strong>
        </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none blue">
          <strong>Price: </strong>
        </span>
        ${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-sm btn-black mx-1"
              onClick={() => handleDecrement(id)}
            >
              -
            </span>
            <span className="btn btn-sm btn-black mx-1">{count}</span>
            <span
              className="btn btn-sm btn-black mx-1"
              onClick={() => handleIncrement(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item Total : ${total}</strong>
      </div>
    </div>
  );
}

export default CartItem;
