import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import sofa from "../../../images/sofa.jpg";
import wareDrobe from "../../../images/waredrove.jpg";
import bookSelf from "../../../images/bookSelf.jpg";
import mobile from "../../../images/mobile.jpg";
import "./FeatureProduct.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
              <CardMedia sx={{ height: 300, borderBottom:'1px solid rgba(97, 7, 7, 0.381)',borderRadius:'10px',boxShadow:'0 10px rgba(97, 7, 7, 0.23)' }} image={sofa} title="green sofa" />
              <CardContent>
                <Typography gutterBottom>
                  <h3 className="productName">GREEN SOFA</h3>
                  <div className="FeatureProductText">
                    <div>
                      <p className="MoneyNot">12,000 $</p>
                    </div>
                    <div className="heartColor">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>
                      <p>10,000 $</p>
                    </div>
                  </div>
                  <div className="NameAndView">
                    <Link style={{ textDecoration: "none" }} to="/allProducts">
                      <p>
                        Veiw More <span>&#8594;</span>
                      </p>
                    </Link>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="featuredProduct">
            <Card>
              <CardMedia
                sx={{ height: 300 ,borderBottom:'1px solid rgba(97, 7, 7, 0.381)',borderRadius:'10px',boxShadow:'0 10px rgba(97, 7, 7, 0.23)' }}
                image={wareDrobe}
                title="green sofa"
              />
              <CardContent>
                <Typography gutterBottom>
                  <h3 className="productName">GREEN SOFA</h3>
                  <div className="FeatureProductText">
                    <div>
                      <p className="MoneyNot">12,000 $</p>
                    </div>
                    <div className="heartColor">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>
                      <p>10,000 $</p>
                    </div>
                  </div>
                  <div className="NameAndView">
                    <Link style={{ textDecoration: "none" }} to="/allProducts">
                      <p>
                        Veiw More <span>&#8594;</span>
                      </p>
                    </Link>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="featuredProduct">
            <Card>
              <CardMedia
                sx={{ height: 300 ,borderBottom:'1px solid rgba(97, 7, 7, 0.381)',borderRadius:'10px',boxShadow:'0 10px rgba(97, 7, 7, 0.23)' }}
                image={bookSelf}
                title="green sofa"
              />
              <CardContent>
                <Typography gutterBottom>
                  <h3 className="productName">GREEN SOFA</h3>
                  <div className="FeatureProductText">
                    <div>
                      <p className="MoneyNot">12,000 $</p>
                    </div>
                    <div className="heartColor">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>
                      <p>10,000 $</p>
                    </div>
                  </div>
                  <div className="NameAndView">
                    <Link style={{ textDecoration: "none" }} to="/allProducts">
                      <p>
                        Veiw More <span>&#8594;</span>
                      </p>
                    </Link>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="featuredProduct">
            <Card>
              <CardMedia
                sx={{ height: 300 ,borderBottom:'1px solid rgba(97, 7, 7, 0.381)',borderRadius:'10px',boxShadow:'0 10px rgba(97, 7, 7, 0.23)' }}
                image={mobile}
                title="green sofa"
              />
              <CardContent>
                <Typography gutterBottom>
                  <h3 className="productName">GREEN SOFA</h3>
                  <div className="FeatureProductText">
                    <div>
                      <p className="MoneyNot">12,000 $</p>
                    </div>
                    <div className="heartColor">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>
                      <p>10,000 $</p>
                    </div>
                  </div>
                  <div className="NameAndView">
                    <Link style={{ textDecoration: "none" }} to="/allProducts">
                      <p>
                        Veiw More <span>&#8594;</span>
                      </p>
                    </Link>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeatureProduct;
