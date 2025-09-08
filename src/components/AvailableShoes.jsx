import React from "react";
import Card from "./Card";


const AvailableShoes = ({ products, handleOnClick }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {products.map((item, indx) => (
        <Card
          item={item}
          key={indx}
          handleOnClick={handleOnClick} />
      ))}
    </div>


  );
};

export default AvailableShoes;
