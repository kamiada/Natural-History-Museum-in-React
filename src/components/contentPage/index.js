/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Layout from "../Layout/layout";
import ContentPageBackground from "../../images/claudio-testa-iqeG5xA96M4-unsplash.jpg";
import "../../global_style.scss";
import "./content_styles.scss";
import ourScience from "../../images/paul-minami-_AH4fdMyYIg-unsplash.jpg";
import Tile from "./Tile";

const Content = () => {
  return (
    <>
      <Layout>
        <div className="content_wrapper">
          <Tile image={ourScience} alt_text="museum" text="Our science" />
          <Tile image={ourScience} alt_text="museum" text="Become our member" />
          <Tile image={ourScience} alt_text="museum" text="Try at home" />
          {/* <div className="long_panel">
            <div className="title">
              OUR BROKEN PLANET: How we got here and ways to fix it
            </div>
          </div> */}
          <Tile image={ourScience} alt_text="museum" text="British wildlife" />
          <Tile image={ourScience} alt_text="museum" text="Anthropocene" />
          <Tile image={ourScience} alt_text="museum" text="Science News" />
          <Tile image={ourScience} alt_text="museum" text="What on Earth?" />
        </div>
      </Layout>
    </>
  );
};

export default Content;
