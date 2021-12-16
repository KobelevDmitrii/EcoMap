/* 
  Это гланый компонент программы, который
  позволяет собрать главную страницу в единое целое
*/

import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../src/Pages/login';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './Pages/main'

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
