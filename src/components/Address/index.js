import React from "react";

function Address({ address }) {
  return (
    <div>
      <p>
        {address ? (
          <div>
            <hr />
            <p>
              <strong>Logradouro: </strong>
              <span>{address.logradouro}</span>
            </p>
            <p>
              <strong>Cidade: </strong>
              <span>{address.localidade}</span>
            </p>
            <p>
              <strong>Bairro: </strong>
              <span>{address.bairro}</span>
            </p>
            <p>
              <strong>UF: </strong>
              <span>{address.uf}</span>
            </p>
          </div>
        ) : (
          <strong>Digite um CEP válido</strong>
        )}
      </p>
    </div>
  );
}

export default Address;
