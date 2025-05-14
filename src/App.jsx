import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbarr from "./components/Navbarr";
import Search from "./components/Search";
import Menu from "./components/Menu";
import About from "./components/About";
import ReviewPage from "./components/ReviewPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import Register from "./components/Register";
import Profile from "./components/Profile";
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
