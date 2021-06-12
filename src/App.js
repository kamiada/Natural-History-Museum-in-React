import "./App.css";
import React, { Fragment, useRef } from "react";
import Home from "../src/components/homePage/index";
import Content from "./components/contentPage";

function App() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)

  const scrollTo =(ref)=> {
    window.scroll({
      top:ref.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <Fragment>
      <Home ref={section1Ref}  style={{ height: "100vh", margin: 0 }}/>
      <Content ref={section2Ref} style={{ height: "100vh", margin: 0 }}/>
    </Fragment>
  );
}

export default App;
