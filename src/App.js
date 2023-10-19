import React from 'react';

import { Footer,Blog,Possibility,Features,WhatGPT4,Header } from './container';
import { CTA, Brand, NavBar  } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGPT4/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default App
