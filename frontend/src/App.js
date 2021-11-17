/* 
  Это гланый компонент программы, который
  позволяет собрать главную страницу в единое целое
*/

import React from 'react';
import Header from './componens/Header';
import Map from './componens/Map.js';
import About from './componens/About';
import Footer from './componens/Footer';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header></Header>
        <Map></Map>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
