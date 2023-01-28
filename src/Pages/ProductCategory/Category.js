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
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="productCategory HeadingText">
      <h1>Our Product Category</h1>
      <Grid container className="AllProducts">
        <Grid xs={1}></Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faMobile} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faChair} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faBook} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faCouch} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faTv} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faUtensils} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faShirt} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faGlasses} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faCakeCandles} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faShower} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      <br />
      <Grid container className="AllProducts">
        <Grid xs={1}></Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faBoxOpen} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faChair} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faBook} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faCouch} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faTv} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faUtensils} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faShirt} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faGlasses} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faCakeCandles} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}>
          <div>
            <button>
              <FontAwesomeIcon icon={faShower} />
            </button>
          </div>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Category;
