import React from 'react';

const Card = ({ item, handleOnClick }) => {

  return (
    <div className="card bg-pink-400 p-4 rounded-sm">
      <img className="w-full h-36" srcSet={item.img} alt="" />
      <div className="p-2">
        <p>{item.name}</p>
        <p className="font-bold">Price:{item.price}</p>

      </div>
      <div className="text-center">
        <button
          onClick={() => handleOnClick(item)}
          className="px-2 py-2 bg-orange-200 font-bold rounded-lg hover:bg-orange-400 "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
