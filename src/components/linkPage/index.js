import React from "react";
import Layout from "../Layout/layout";
import "./link_page_style.scss";
import LinkGenerator from "./LinkGenerator";

const linkPage = () => {
  return (
    <>
      <Layout>
        <div className="main_wrapper_links">
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              VISIT
            </a>
            <a href="/Whatson">What's on</a>
            <a href="/Whatson">Exhibitions and attractions</a>
            <a href="/Whatson">Galleries and Museum map</a>
            <a href="/Whatson">Access</a>
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              DISCOVER
            </a>
            <a href="/Whatson">News</a>
            <a href="/Whatson">Anthropocene</a>
            <a href="/Whatson"> British wildlife </a>
            <a href="/Whatson">Collections</a>
            <a href="/Whatson">Dinosaurs</a>
            <a href="/Whatson"> Human Evolution </a>
            <a href="/Whatson">Oceans</a>
            <a href="/Whatson">Space</a>
            <a href="/Whatson"> What on Earth? </a>
            <a href="/Whatson">Video</a>
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              FOR SCHOOLS
            </a>
            <a href="/Whatson"> Things to do </a>
            <a href="/Whatson"> Essential visiting information </a>
            <a href="/Whatson"> Teaching resources </a>
          </div>
          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              CAREERS
            </a>
            <a href="/Whatson">Current vacancies </a>
          </div>

          <div className="links_wrapper">
            <a href="/visit" className="title_link">
              JOIN AND SUPPORT
            </a>
            <a href="/Whatson"> Membership </a>
            <a href="/Whatson"> Gift membership </a>
            <a href="/Whatson"> Make a donation </a>
            <a href="/Whatson"> Become a Patron </a>
            <a href="/Whatson"> Corporate partnerships </a>
          </div>

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
            </div>

        </div>
      </Layout>
    </>
  );
};
export default linkPage;
