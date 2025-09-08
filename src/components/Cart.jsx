import React from 'react';

const Cart = ({ cartItem, handleIncreseBtn , decreseQuantity , total}) => {
  return (
    <div>
      <h1 className="text-white font-bold px-5">CART</h1>
      <div className="">
        {cartItem.length !== 0 ? (
          cartItem.map((item, indx) => (
            <div key={indx} className="border-b-1 border-gray-300 ">
              <div className="p-4 text-white flex justify-between  items-center">
                <img className="w-20 h-20" src={item.img} alt="" />
                <p>{item.name}</p>
                <p className="font-bold">Price:{item.price}</p>
                <div className="flex gap-2 items-center ">
                  <button
                    onClick={() => handleIncreseBtn(item)}
                    className="bg-orange-300 p-1 rounded-lg font-bold w-6 hover:bg-green-500"
                  >
                    {" "}
                    +{" "}
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    disabled={item.quantity <= 0}
                    onClick={() => decreseQuantity(item)}
                    className="bg-orange-300  p-1 rounded-lg font-bold w-6 disabled:bg-orange-200 hover:bg-red-500"
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white text-center bg-gray-700 p-2">
            <p>Your Cart is empty</p>
          </div>
        )}
      </div>
      <div className="text-white">
        <p>TOTAL : ${total}</p>
      </div>
    </div>
  );
}

export default Cart;
