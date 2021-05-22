import React from "react";
import Layout from "../Layout/layout";
import ContentPageBackground from "../../images/claudio-testa-iqeG5xA96M4-unsplash.jpg";
import "../../global_style.scss";
import "./content_styles.scss";

const Content = () => {
  return (
    <>
      <Layout>
        <div className="content_wrapper">
        <img src={ContentPageBackground} alt="museum"></img>
          <div className="panel_holder">
            <div>panel 1</div>
            <div className="long_panel">panel 2</div>
            <div>panel 3</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Content;
