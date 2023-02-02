import {  faArrowLeftRotate, faLock, faTrophy, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import React from "react";
import './ShippingSystem.css';

const ShippingSystem = () => {
  return (
    <div className="shippingSytem">
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="products"
      >
        <Grid item xs={3}>
          <div className="singleShipping">
            <div className="iconStyle">
              <FontAwesomeIcon icon={faTruckFast} />
            </div>
            <div>
              <h6>Free Shipping</h6>
              <p>When ordering over $100</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="singleShipping">
            <div className="iconStyle">
              <FontAwesomeIcon icon={faArrowLeftRotate} />
            </div>
            <div>
              <h6>Free Return</h6>
              <p>Get Return within 30 days</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="singleShipping">
            <div className="iconStyle">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div>
              <h6>Secure Payment</h6>
              <p>100% Secure Online Payment</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
        <div className="singleShipping">
            <div className="iconStyle">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div>
              <h6>Best Quality</h6>
              <p>Original Product Guarenteed</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShippingSystem;
