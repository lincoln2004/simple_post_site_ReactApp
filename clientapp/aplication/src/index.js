import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/header/header.jsx'

import Home from './pages/home/index'
import Create from './pages/create/index'
import List from './pages/list/index'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './resources/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

      <>
      
      <Header/>

      <Routes>

        <Route path='/' element={<Home />} errorElement={<handleError />}/>

        <Route path='/createpost' element={<Create/>}/>

        <Route path='/listpost' element={<List />}/>

      </Routes>
      
      </>


    </BrowserRouter>
);
