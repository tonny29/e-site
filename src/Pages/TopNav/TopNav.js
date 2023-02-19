/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import FeatureProduct from "../AllProducts/FeatureProduct/FeatureProduct";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import PopularSale from "../PopularSale/PopularSale";
import Category from "../ProductCategory/Category";
import ShippingSystem from "../Shipping/ShippingSystem";
import "./TopNav.css";

const TopNav = () => {

  return (
    <div>
      <div>
        <nav className="topnav">
          <a className="logo" href="#">
            Logo
          </a>
          <div className="menu">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <a href="#" class="icon">
            &#9776;
          </a>
        </nav>
      </div>

      <div>
        <Home></Home>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Category></Category>
        <ShippingSystem></ShippingSystem>
        <FeatureProduct></FeatureProduct>
        <PopularSale></PopularSale>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TopNav;
