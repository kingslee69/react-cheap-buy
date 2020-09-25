import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./css/button";
import { NavWrapper } from "./css/wrapper";

function Navbar(props) {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark nav-wrapper">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="A Cheap Store" />
      </Link>

      <ul className="navbar-nav align-items-center mr-auto">
        <li className="nav-item ml-5">
          <Link className="nav-link" to="/">
            products
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="nav-link ml-auto">
        <ButtonContainer>
          <span>
            <i className="fa fa-cart-plus"></i>
          </span>{" "}
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

export default Navbar;
