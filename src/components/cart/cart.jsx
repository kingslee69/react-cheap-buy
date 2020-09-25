import React, { Fragment } from "react";
import Title from "../title";
import CartColumns from "./cartColumns";
import EmptyCart from "./emptyCart";
import { ProductConsumer } from "../../productContext";
import CartList from "./cartList";
import CartTotals from "./cartTotals";

function Cart(props) {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;

          if (cart.length > 0) {
            return (
              <Fragment>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </Fragment>
            );
          }

          return <EmptyCart />;
        }}
      </ProductConsumer>
    </section>
  );
}

export default Cart;
