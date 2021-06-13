import React, { Fragment, useRef } from "react";
import Home from "../src/components/homePage/index";
import Content from "./components/contentPage";

function App() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
    <button onClick={() => scrollTo(section2Ref)}>Scroll</button>
      <Home/>
      <Content/>
      <h1 ref={section2Ref}>test</h1>
    </Fragment>
  );
}

export default App;
