import React from "react";
import "./SearchBar.css";
import { BsSearch } from 'react-icons/bs'; // Importa el icono de búsqueda de Bootstrap

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for something..." />
      <button type="submit"><BsSearch /></button>
    </div>
  );
}

export default SearchBar;
