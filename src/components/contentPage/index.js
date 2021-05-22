import React from "react";
import Layout from "../Layout/layout";
import ContentPageBackground from "../../images/claudio-testa-iqeG5xA96M4-unsplash.jpg";
import "../../global_style.scss";
import "./content_styles.scss";
import ourScience from '../../images/paul-minami-_AH4fdMyYIg-unsplash.jpg';


const Content = () => {
  return (
    <>
      <Layout>
        <div className="content_wrapper">
          <img src={ContentPageBackground} alt="museum"></img>
          <div className="panel_holder">
            <div className="square_panel_holder">
              <div className="square">panel 1</div>
            </div>
            <div className="long_panel">
              <div className="title">OUR BROKEN PLANET: How we got here and ways to fix it</div>
            </div>
            <div className="square_panel_holder">
              {" "}
              <div className="square">panel 3</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Content;
