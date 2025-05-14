import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import '../components/style/PlaceOrder.css';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);
  console.log('Cart items:', items);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const discountAmount = useSelector((state) => state.cart.discountAmount);
  const finalAmount = useSelector((state) => state.cart.finalAmount);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setStateValue] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const message = (e) => {
    e.preventDefault();
    console.log('Button clicked');

    if (items.length === 0) {
      console.log('Cart is empty');

      toast.error('Your cart is empty', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      firstName &&
      lastName &&
      email &&
      street &&
      city &&
      state &&
      zipCode &&
      country &&
      phone
    ) {
      console.log('All fields filled');
      toast.success('Order placed successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/*');
      }, 2000);
    } else {
      console.log('Not all fields filled');
      toast.error('All fields are required', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };


  return (
    <>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
            <input type='text' placeholder='First name' value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required />
            <input type='text' placeholder='Last name' value={lastName}
              onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <input type='email' placeholder='Email address' value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <input type='text' placeholder='Street' value={street}
            onChange={(e) => setStreet(e.target.value)}
            required />
          <div className='multi-fields'>
            <input type='text' placeholder='City' value={city}
              onChange={(e) => setCity(e.target.value)}
              required />
            <input type='text' placeholder='State' value={state}
              onChange={(e) => setStateValue(e.target.value)}
              required />
          </div>
          <div className='multi-fields'>
            <input type='text' placeholder='Zip Code' value={zipCode}
              onChange={(e) => setZipCode(e.target.value)} required />
            <input type='text' placeholder='Country' value={country}
              onChange={(e) => setCountry(e.target.value)} required />
          </div>
          <input type='text' placeholder='Phone' value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required />
        </div>
        <div className='place-order-right'>
          <div className='cart-total'>
            <h2>Cart total</h2>
            <div>
              <div className='cart-total-details'><p>Subtotal</p>
                <p>{totalAmount}</p></div><hr />
              <div className='cart-total-details'><p>Delivery Fee</p>
                <p>{2}</p></div><hr />
              <div className='cart-total-details'><p>Total</p>
                <p>{totalAmount + 2}</p></div><hr />
              <div className='cart-total-details'><p>Discount</p>
                <p>{discountAmount}</p></div><hr />
              <div className='cart-total-details'><b>Final Amount to pay </b>
                <b>{finalAmount + 2}</b>
              </div>
            </div>
            <button type='button' onClick={message}>PLACE ORDER</button>
          </div>
        </div>
        <ToastContainer />
      </form>

    </>
  )
}

export default PlaceOrder;