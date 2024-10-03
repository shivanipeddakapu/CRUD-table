import React, { Component } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import GetUsers from "./Pages3/GetUsers";
import Add from "./Pages3/Add"
import Update from './Pages3/Update';
export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetUsers/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}


//rafce-react arrow functional componet
//imr -import react from react
//imrd -import react dom
//rafc-recat arrow functional component
//rcc-react class componentn