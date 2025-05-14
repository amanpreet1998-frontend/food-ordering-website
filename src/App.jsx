import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import {Home,Navbarr,Search,Menu,About,ReviewPage,Footer,Login,Cart,PlaceOrder,Register,Profile} from "./components";
import { toast,ToastContainer } from 'react-toastify';

const App = () => {
  
  return (
    <>
    <div>
      <Navbarr/>
     <main className="mainn">
          <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<ReviewPage/>}/>
            <Route path="/contact" element={<Footer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<PlaceOrder/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </main>
          <ToastContainer/>
      </div>
      
      </>
  )
}

export default App;
