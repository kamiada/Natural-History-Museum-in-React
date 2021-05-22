import './App.css';
import React, { Fragment } from 'react';
import Home from '../src/components/homePage/index';
import Content from './components/contentPage';

function App() {
  return (
    <Fragment>
    <Home />
    <Content />
    </Fragment>
  );
}

export default App;
