import React from "react";
import Layout from "../Layout/layout";
import "./link_page_style.scss";
import data from "./links.json";
import logo from "../../images/nhm-logo-white.svg";

const linkPage = () => {
  return (
    <>
      <Layout>
      <div className="background_wrapper_links">
      <div className="main_wrapper_links">
          <div className="links_wrapper">
            <img src={logo} alt="NHM logo"></img>
          </div>

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
        </div>

        <div className="main_wrapper_links">
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              TAKE PART
            </a>
            {data &&
              data.links_to_TakePart.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              ONLINE SHOP
            </a>
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              OUR SCIENCE
            </a>
            {data &&
              data.links_to_OurScience.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              BUSINESS SERVICES
            </a>
            {data &&
              data.links_to_BusinessServices.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              LEGAL
            </a>
            {data &&
              data.links_to_Legal.map((element) => (
                <a href={element.href}>{element.linkTitle}</a>
              ))}
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};
export default linkPage;
