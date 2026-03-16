import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Navbar from "./components/Navbar"

import Report923 from "./pages/Report923"
import Report12 from "./pages/Report12"
import ReportFactsheet from "./pages/ReportFactsheet"

export default function App(){

  return(

    <BrowserRouter>

      <Header/>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Report923/>} />

        <Route path="/report12" element={<Report12/>} />

        <Route path="/factsheet" element={<ReportFactsheet/>} />

      </Routes>

    </BrowserRouter>

  )

}