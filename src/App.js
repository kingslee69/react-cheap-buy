import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./components/productList";
import Notfound from "./components/notFound";
import Details from "./components/details";
import Navbar from "./components/navbar";
import Cart from "./components/cart/cart";
import Modal from "./components/modal";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/" exact component={ProductList} />
        <Route component={Notfound} />
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;
