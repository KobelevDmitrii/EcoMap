/* 
  Это гланый компонент программы, который
  позволяет собрать главную страницу в единое целое
*/

import React from 'react';
import Map from '../components/Map.js';
import About from '../components/About';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Map></Map>
        <About></About>
      </div>
    </div>
  );
}

export default App;
