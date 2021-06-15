import React from "react";
import Layout from "../Layout/layout";
import "./link_page_style.scss";
import data from "./links.json";

const linkPage = () => {
  return (
    <>
      <Layout>
        <div className="main_wrapper_links">
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              VISIT
            </a>
            {data &&
              data.links_to_visit.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              DISCOVER
            </a>
            {data &&
              data.links_to_discover.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              FOR SCHOOLS
            </a>
            {data &&
              data.links_to_forSchool.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              CAREERS
            </a>
            {data &&
              data.links_to_careers.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              JOIN AND SUPPORT
            </a>
            {data &&
              data.links_to_JoinAndSupport.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>
          {/* 
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              TAKE PART
            </a>
            <a href="/Whatson">Volunteer</a>
            <a href="/Whatson">Citizen science</a>
            <a href="/Whatson"> Identify UK nature </a>
            <a href="/Whatson"> Centre for UK Biodiversity </a>
            <a href="/Whatson">Wildlife Photographer of the Year competition</a>
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              ABOUT US
            </a>
            <a href="/Whatson"> News </a>
            <a href="/Whatson">  Press office  </a>
            <a href="/Whatson">  Governance  </a>
            <a href="/Whatson">  Contact us  </a>
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              ONLINE SHOP
            </a>
            </div> */}
        </div>
      </Layout>
    </>
  );
};
export default linkPage;
