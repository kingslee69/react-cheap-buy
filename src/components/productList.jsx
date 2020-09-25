import React, { Component, Fragment } from "react";
import Title from "./title";
import Product from "./product";
import { ProductConsumer } from "../productContext";

class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="p-5">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value =>
                value.products.map(product => (
                  <Product key={product.id} product={product} />
                ))
              }
            </ProductConsumer>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
