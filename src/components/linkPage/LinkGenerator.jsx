import React, { Fragment } from "react";
import "./link_page_style.scss";

const LinkGenerator = (mainLinkTitles, linkTitles, hrefs, hrefsSmall) => (
  <Fragment>
    <div className="main_wrapper_links">
      <div className="links_wrapper">
        <a href={hrefs} className="title_link">
          {mainLinkTitles}
        </a>
        <a href={hrefsSmall}>{linkTitles}</a>
      </div>
    </div>
  </Fragment>
);
export default LinkGenerator;
