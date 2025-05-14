import React from 'react';
import '../components/style/Home.css';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import ReviewPage from './ReviewPage';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
 <div className="">
        <div className='main'>
          <div className='mainContent'>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='text-xl text-white'><b>Order your <br />favourite food here</b></motion.h1>
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='text-white'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest<br />
              ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your<br />
              dining experience, one delicious meal at a time.
            </motion.p>
            <Link to='/about'><motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
              className='mainBtn'>About us</motion.button></Link>
          </div>
        </div>
      </div>
      <Menu />
      <About />
      <ReviewPage />
      <Footer />
    </>
  )
}

export default Home;