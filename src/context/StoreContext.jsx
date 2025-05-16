import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets';


export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{

const[cartItems,setCartItems]=useState({});


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


    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;