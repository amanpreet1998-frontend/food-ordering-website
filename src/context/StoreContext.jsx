import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets';
// import { db } from '../firebase/firebaseConfig';
// import { ref, set, onValue } from 'firebase/database';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useSelector } from 'react-redux';


//const auth = getAuth();

export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{

const[cartItems,setCartItems]=useState({});
// const cartitems = useSelector((state) => state.cart.items);
// const [currentUser, setCurrentUser] = useState(null);

// useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });
//   }, []);

// useEffect(() => {
//     if (currentUser) {
//       const cartRef = ref(db, `carts/${currentUser.uid}`);
//       onValue(cartRef, (snapshot) => {
//         const cartData = snapshot.val();
//         // dispatch action to update cart state from firebase
//       });
//     }
//   }, [currentUser]);

//   useEffect(() => {
//     if (currentUser) {
//       const cartRef = ref(db, `carts/${currentUser.uid}`);
//       set(cartRef, cartitems);
//     }
//   }, [cartitems, currentUser]);

  const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);

 const contextValue={
food_list,
cartItems,
setCartItems,
searchTerm,
setSearchTerm,
searchResults,
setSearchResults,
//cartitems

    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;