import React, { Component } from "react";
import { ProductConsumer } from "../productContext";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./css/button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;

          return (
            <div className="container py-5">
              <div className="col-10 mx-auto blue text-center">
                <h1>{title}</h1>
              </div>
              <div className="row">
                {/* left col */}
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* right col */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="blue">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      className="ml-5"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
