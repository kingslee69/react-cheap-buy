import React, { Component } from "react";
import { ProductConsumer } from "../productContext";
import { Link } from "react-router-dom";
import { TileWrapper } from "./css/wrapper";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, img, inCart, title, price } = this.props.product;

    return (
      <TileWrapper className="my-3 col-9 col-md-6 col-lg-3 mx-auto">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="products" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0">in cart</p>
                  ) : (
                    // <p className="text-capitalize mb-0">add</p>
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="bright mb-0 font-italic">${price}</h5>
          </div>
        </div>
      </TileWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};

export default Product;
