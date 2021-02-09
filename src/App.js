import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import Address from "./components/Address";
import api from "./services/api";

import "./App.css";

function App() {
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState(null);

  const handleChange = (value) => {
    setCEP(value);
    setAddress(null);
    api
      .get(`${value}/json`)
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setAddress(result);
      })
      .catch((err) => {
        console.log("Endereço não localizado!");
      });
  };

  return (
    <div className="App">
      <SearchBar cep={cep} handleChange={handleChange} />
      <Address address={address} />
    </div>
  );
}

export default App;
