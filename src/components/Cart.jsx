import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const Cart = ({ cartItem, handleIncreseBtn , decreseQuantity , total}) => {
  return (
    <div className='border border-blue-200 p-2 bg-white'>
      <h1 className=" font-bold px-5 flex items-center gap-3 text-xl mb-2"><FaCartArrowDown />CART</h1>
      <div className="">
        {cartItem.length !== 0 ? (
          cartItem.map((item, indx) => (
            <div key={indx} className="border-b-1 border-gray-300 ">
              <div className="p-4  flex justify-between  items-center">
                <div className='md:w-[50%] text  md:flex gap-4'>
                  <img className="w-20 h-20 " src={item.img} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className='md:w-[50%] flex flex-col justify-between md:flex-row gap-4'>
                  <p className="font-bold">Price:{item.price}</p>
                  <div className="flex gap-2 items-center ">
                    <button
                      onClick={() => handleIncreseBtn(item)}
                      className="bg-blue-300 p-1 rounded-lg font-bold w-6 hover:bg-blue-500"
                    >
                      {" "}
                      +{" "}
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      disabled={item.quantity <= 0}
                      onClick={() => decreseQuantity(item)}
                      className="bg-blue-300  p-1 rounded-lg font-bold w-6 disabled:bg-orange-200 hover:bg-blue-400"
                    >
                      {" "}
                      -{" "}
                    </button>
                  </div>
               </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center bg-blue-300 p-2 mb-3">
            <p>Your Cart is empty</p>
          </div>
        )}
      </div>
      <div className="">
        <p>TOTAL : ${total}</p>
      </div>
    </div>
  );
}

export default Cart;
