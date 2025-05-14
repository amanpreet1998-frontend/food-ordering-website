import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { food_list } from '../assets/assets';


const Search = () => {

  const { searchTerm, setSearchTerm } = useContext(StoreContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />

    </>
  );
};

export default Search;

