import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import './scss/custom.scss'
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Blog from './components/Blog';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  React.useEffect(() => {
    document.title = "Sanstzu's Crib"
  },[]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
