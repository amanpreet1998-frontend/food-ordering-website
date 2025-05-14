import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { food_list } from "../assets/assets";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return {
        items: [],
        totalAmount: 0,
        discountAmount: 0,
        finalAmount: 0,
        deliveryFee: 2,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      items: [],
      totalAmount: 0,
      discountAmount: 0,
      finalAmount: 0,
      deliveryFee: 2,
    };
  }
};
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};



const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};


const cartSlice = createSlice({
  name: 'cart',
   initialState: loadState()
  //   items: [],
  //   totalAmount: 0,
  //   discountAmount: 0,
  //   finalAmount: 0,
  //   deliveryFee: 2,
    

   ,

  reducers: {

    addToCart(state, action) {
      console.log('Before adding item:', JSON.parse(JSON.stringify(state.items)));
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
      state.finalAmount = state.totalAmount;
saveState(state);

      console.log('After adding item:', JSON.parse(JSON.stringify(state.items)));
    },

    removeFromCart(state, action) {
      const itemName = action.payload;
      state.items = state.items.filter((i) => i.name !== itemName);
      state.totalAmount = calculateTotalAmount(state.items);
      state.finalAmount = state.totalAmount;
      saveState(state);

    },


    decreaseQuantity(state, action) {
      const itemName = action.payload;
      const item = state.items.find((i) => i.name === itemName);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.name !== itemName);
        }
        state.totalAmount = calculateTotalAmount(state.items);
        state.finalAmount = state.totalAmount;
        saveState(state);

      }
    },


    increaseQuantity(state, action) {
      const itemName = action.payload;
      const item = state.items.find(i => i.name === itemName);
      if (item) {
        item.quantity += 1;
        state.totalAmount = calculateTotalAmount(state.items);
        state.finalAmount = state.totalAmount;
        saveState(state);

      }
    },

    applyPromoCode(state, action) {
      const promoCode = action.payload;
      let discount = 0;
      if (promoCode && promoCode === 'FIRSTUSER') {
        discount = state.totalAmount * 0.1; // 10% discount
        state.discountAmount = discount;
        state.finalAmount = Math.round((state.totalAmount - discount) * 100) / 100;
      } else {
        state.discountAmount = 0;
        state.finalAmount = state.totalAmount;
        toast.error('Promo code is not valid');
      }
      saveState(state);

    },
    },
  selectors: {
    selectItems: (state) => state.items,
    selectTotalAmount: (state) => state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    selectFinalAmount: (state) => state.items.length > 0 ? state.items.reduce((acc, item) => acc + item.price * item.quantity, 0) + state.deliveryFee - state.discountAmount : 0,
    selectDiscountAmount: (state) => state.discountAmount,
     selectIsCartEmpty: (state) => state.items.length === 0,

  },

})

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity, applyPromoCode } = cartSlice.actions
export const { selectItems, selectTotalAmount, selectFinalAmount, selectDiscountAmount,selectIsCartEmpty} = cartSlice.selectors;


export default cartSlice.reducer;