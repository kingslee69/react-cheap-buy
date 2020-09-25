import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../productContext";
import { ButtonContainer } from "./css/button";
import { ModalWrapper } from "./css/wrapper";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { title, img, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalWrapper>
                <div className="container">
                  <div className="row">
                    <ModalWrapper
                      fake
                      className="container"
                      onClick={() => closeModal()}
                    ></ModalWrapper>
                    <div
                      id="modal"
                      className="col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5 className="blue">item added to the cart</h5>
                      <img src={img} alt={title} className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${price}</h5>

                      <div>
                        <Link className="px-auto" to="/">
                          <ButtonContainer
                            className=" m-2"
                            onClick={() => closeModal()}
                          >
                            Store
                          </ButtonContainer>
                        </Link>

                        <Link to="/cart" className="px-auto">
                          <ButtonContainer
                            className=""
                            cart
                            onClick={() => closeModal()}
                          >
                            Go to Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalWrapper>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
