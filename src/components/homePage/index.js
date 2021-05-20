import React from "react";
import Layout from "../Layout/layout";
import BackgroundImage from "../../images/kevin-mueller-1gUES9J7Ph8-unsplash.jpg";
import "../../global_style.scss";
import "./home_style.scss";

const Home = () => {
  return (
    <>
      <Layout>
        <img src={BackgroundImage} alt="museum"></img>
        <div className="home_title_wrapper">
        <div className="title_holder">
            <h1>WELCOME TO NATURAL HISTORY MUSEUM</h1>
            <button className="home_button">
              <p>BOOK YOUR FREE TICKETS IN ADVANCE</p>
            </button>
          </div>
          <div className="home_links">
          <a>VISIT</a>
          <a>DISCOVER</a>
          <a>TRY AT HOME</a>
          <a>JOIN AND SUPPORT</a>
          <a>SHOP</a>
          <a>SCHOOLS</a>
          <a>OUR SCIENCE</a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
