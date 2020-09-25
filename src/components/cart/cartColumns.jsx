import React from "react";

function CartComponents(props) {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase ">
            <strong>products</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">
            <strong>name of products</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">
            <strong>price</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">
            <strong>quantity</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">
            <strong>remove</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">
            <strong>total</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartComponents;
