/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Layout from "../Layout/layout";
import "../../global_style.scss";
import "./content_styles.scss";
import ourScience from "../../images/paul-minami-_AH4fdMyYIg-unsplash.jpg";
import Tile from "./Tile";
import Burger from "../../images/armando-ascorve-morales-ypZI_CA91M0-unsplash.jpg";
import Skull from "../../images/mathias-p-r-reding-JvjPYMUr3Pk-unsplash.jpg";
import Hall from "../../images/claudio-testa-iqeG5xA96M4-unsplash.jpg";
import BritishWildlife from "../../images/pauline-bernfeld-A-Xd4AADhcU-unsplash.jpg";
import Whale from "../../images/fabio-hanashiro-ur4pyEnPdA0-unsplash.jpg";
import Spider from "../../images/hello-katuvi-0VDXcJuQATg-unsplash.jpg";

const Content = () => {
  return (
    <>
      <Layout>
        <div className="content_wrapper_top">
          <Tile image={ourScience} alt_text="museum" title="Our science" />
          <Tile image={Skull} alt_text="museum" title="Become our member" />
          <Tile image={Hall} alt_text="museum" title="Try at home" />
        </div>
        <div className="long_panel">
        <div className="title">
            <h3>OUR BROKEN PLANET: How we got here and ways to fix it</h3>
            </div>
          </div>
        <div className="content_wrapper">
          <Tile
            image={BritishWildlife}
            alt_text="museum"
            title="British wildlife"
            text="Peregrine falcons are the top birds in town. Peregrine falcons have adapted to urban living, but what's the best way to see the fastest bird in town?"
          />
          <Tile
            image={Burger}
            alt_text="museum"
            title="Anthropocene"
            text="Would you eat lab-grown meat? Would you eat a steak grown by scientists?"
          />
          <Tile
            image={Whale}
            alt_text="museum"
            title="Science News"
            text="Evolving a bigger brain isn't always about intelligence
            It's more common for mammals to have evolved smaller body sizes which makes it look like the brain is getting bigger."
          />
          <Tile
            image={Spider}
            alt_text="museum"
            title="What on Earth?"
            text="Wildlife Photographer of the Year: the curious case of parasitic bat flies
            Wildlife photographer and entomologist Dr Piotr Naskrecki introduces the peculiar insects that spend their entire lives clinging to bats for dear life."
          />
        </div>
      </Layout>
    </>
  );
};

export default Content;
