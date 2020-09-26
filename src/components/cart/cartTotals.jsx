import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./paypalButton";

function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong className="blue">${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong className="blue">${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total :</span>
              <strong className="blue">${cartTotal}</strong>
            </h5>
            <PaypalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CartTotals;
