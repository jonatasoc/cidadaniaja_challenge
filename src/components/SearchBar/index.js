import React from "react";

function SearchBar({ cep, handleChange }) {
  return (
    <input
      value={cep}
      placeholder="Digite um CEP válido"
      maxLength="8"
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}

export default SearchBar;
