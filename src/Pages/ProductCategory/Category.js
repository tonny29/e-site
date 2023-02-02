import {
  faBook,
  faChair,
  faMobile,
  faCouch,
  faTv,
  faUtensils,
  faShirt,
  faGlasses,
  faCakeCandles,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <div className="productCategory HeadingText">
      <div className="NameAndView">
      <h1>Our Product Category</h1>
      <Link style={{textDecoration: 'none'}} to="/allProducts">
          <p>
            Veiw More <span>&#8594;</span>
          </p>
        </Link>
      </div>
      <Grid container className="AllProducts">
        <Grid xs={1}></Grid>
        <Grid xs={1}>
          <Link to="/allProducts">
            <div>
              <button>
                <FontAwesomeIcon icon={faMobile} />
              </button>
            </div>
          </Link>
        </Grid>
        <Grid xs={1}>
          <Link to="/allProducts">
            <div>
              <button>
                <FontAwesomeIcon icon={faChair} />
              </button>
            </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faBook} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faCouch} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faTv} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faUtensils} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faShirt} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faGlasses} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faCakeCandles} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faShower} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      <br />
      <Grid container className="AllProducts">
        <Grid xs={1}></Grid>
        <Grid xs={1}>
          <Link to="/allProducts">
            <div>
              <button>
                <FontAwesomeIcon icon={faMobile} />
              </button>
            </div>
          </Link>
        </Grid>
        <Grid xs={1}>
          <Link to="/allProducts">
            <div>
              <button>
                <FontAwesomeIcon icon={faChair} />
              </button>
            </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faBook} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faCouch} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faTv} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faUtensils} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faShirt} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faGlasses} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faCakeCandles} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}>
        <Link to="/allProducts">
          <div>
            <button>
              <FontAwesomeIcon icon={faShower} />
            </button>
          </div>
          </Link>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Category;
