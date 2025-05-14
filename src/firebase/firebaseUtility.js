import {getAuth} from "firebase/auth";
import { db } from './firebaseConfig';
import { ref, set, onValue } from 'firebase/database';


const auth = getAuth();


export const persistCartData = (cartItems) => {
    const user = auth.currentUser;
    if (user) {
      const cartRef = ref(db, `carts/${user.uid}`);
      set(cartRef, cartItems);
    }
  };
  
  export const retrieveCartData = () => {
    const user = auth.currentUser;
    if (user) {
      const cartRef = ref(db, `carts/${user.uid}`);
      onValue(cartRef, (snapshot) => {
        const cartData = snapshot.val();
        // dispatch action to update cart state from firebase
      });
    }
  };