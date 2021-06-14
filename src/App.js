import React, { Fragment } from "react";
import Home from "../src/components/homePage/index";
import Content from "./components/contentPage";
import LinkPage from "./components/linkPage/index";

function App() {
  return (
    <Fragment>
      <Home />
      <Content/>
      <LinkPage/>
    </Fragment>
  );
}

export default App;
