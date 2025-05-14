import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from '../firebase/firebaseConfig'
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import '../components/style/Login.css';
import cross_icon from '../assets/cross_icon.png'
import { Link, useNavigate } from "react-router-dom";



const Register = () => {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "bottom-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>

      <div className="login mt-5">
        <form className='login-container  mt-5' onSubmit={handleRegister}>
          <div className='login-title'>
            <h3>Sign Up</h3>
            <img onClick={() => navigate('/')} src={cross_icon} alt='' />
            {/* <img onClick={()=>setShowReg(false)} src={cross_icon} alt=''/> */}
          </div>
          <div className="login-inputs mb-3 mt-5">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='login-condition'>
            <input type='checkbox' required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-center">
            Already registered <Link to="/login">Login</Link>
          </p>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
export default Register;
