import React from 'react';

const Card = ({ item, handleOnClick, cartItem }) => {

 const itemAlreadyExist = cartItem.find((cart)=>cart.name == item.name);
  return (
    <div className="card border-2 border-blue-300 p-4 rounded-xl shadow-md bg-white">
      <img className="w-full h-36" srcSet={item.img} alt="" />
      <div className="p-2">
        <p>{item.name}</p>
        <p className="font-bold">Price:{item.price}</p>

      </div>
      <div className="text-center">
        
        {itemAlreadyExist ? (
          <button
            onClick={() => handleOnClick(item)}
            disabled
            className='w-full px-2 py-2 bg-blue-200  rounded-lg  '
          >
            ADDED
            </button>
            ) : (
            <button
              onClick={() => handleOnClick(item)}
              disabled={itemAlreadyExist}
              className='w-full px-2 py-2 bg-blue-400 font-bold rounded-lg hover:bg-blue-700 '
            > ADD TO CART</button>
            )
        }
      </div>
    </div>
  );
}

export default Card;
