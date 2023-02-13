import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import sofa from "../../../images/sofa.jpg";
import wareDrobe from "../../../images/waredrove.jpg";
import bookSelf from "../../../images/bookSelf.jpg";
import mobile from "../../../images/mobile.jpg";
import "./FeatureProduct.css";
import { Link } from "react-router-dom";

const FeatureProduct = () => {
  return (
    <div className="productCategory HeadingText">
      <div className="NameAndView">
        <h1>Featured Products</h1>
        <Link style={{ textDecoration: "none" }} to="/allProducts">
          <p>
            Veiw More <span>&#8594;</span>
          </p>
        </Link>
      </div>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="products"
      >
        <Grid item xs={3}>
          <div className="featuredProduct">
            <Card>
              <CardMedia
                sx={{ height: 300 }}
                image={sofa}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom component="div">
                  <h3>Brand Watch</h3>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <img src={wareDrobe} alt="" />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <img src={mobile} alt="" />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <img src={bookSelf} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeatureProduct;
