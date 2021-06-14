import React from "react";
import Layout from "../Layout/layout";
import BackgroundImage from "../../images/kevin-mueller-1gUES9J7Ph8-unsplash.jpg";
import "../../global_style.scss";
import "./home_style.scss";

const scrollTo = () => {
  window.scroll({
    top: 1000,
    behavior: "smooth",
  });
};

const Home = () => {
  return (
    <>
      <Layout>
        <img src={BackgroundImage} alt="museum"></img>
        <div className="home_title_wrapper">
          <div className="title_holder">
            <h1 >WELCOME TO NATURAL HISTORY MUSEUM</h1>
            <button className="home_button" onClick={()=> scrollTo()}>
              <p>BOOK YOUR FREE TICKETS IN ADVANCE</p>
            </button>
          </div>
          <div className="home_links">
            <a href="/visit">VISIT</a>
            <a href="/discover">DISCOVER</a>
            <a href="/tryathome"> TRY AT HOME</a>
            <a href="/joinandsupport">JOIN AND SUPPORT</a>
            <a href="/shop">SHOP</a>
            <a href="/schools">SCHOOLS</a>
            <a href="/ourscience">OUR SCIENCE</a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
