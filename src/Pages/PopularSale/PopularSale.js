import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import watch from "../../images/watch.jpg";
import headphne from "../../images/headphone.jpg";
import "./PopularSale.css";
import { Link } from "react-router-dom";

const PopularSale = () => {
  return (
    <div className="productCategory HeadingText">
      <h1>Popular Sales</h1>
      <Grid container>
        <Grid xs={5} className="popularProducts">
          <Card>
            <CardMedia
              sx={{ height: 300 }}
              image={watch}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>Brand Watch</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <div className="NameAndView">
                <Link style={{ textDecoration: "none" }} to="/allProducts">
                  <p>
                    Veiw More <span>&#8594;</span>
                  </p>
                </Link>
              </div>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={5} className="popularProducts">
          <Card>
            <CardMedia
              sx={{ height: 300 }}
              image={headphne}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3>Brand Headphone</h3>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
            <div className="NameAndView">
                <Link style={{ textDecoration: "none" }} to="/allProducts">
                  <p>
                    Veiw More <span>&#8594;</span>
                  </p>
                </Link>
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PopularSale;
