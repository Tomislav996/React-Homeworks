import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header';

import Home from './Components/Pages/Home/Home';

import People from './Components/Pages/People/People';

import Planets from './Components/Pages/Planets/Planets';

import SingleCharacter from './Components/SingleCharacter/SingleCharacter';





import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home/>} ></Route>
      <Route path='/planets' element={<Planets/>}></Route>
      <Route path='/people' element={<People/>} ></Route>
      <Route path='/character/:id' element={<SingleCharacter/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
