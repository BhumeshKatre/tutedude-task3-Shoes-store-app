import React, { useState } from "react";
import Shoes2 from "/img/p2.png";
import Shoes3 from "/img/p3.png";
import Shoes4 from "/img/p4.png";
import Shoes5 from "/img/p5.png";
import LogoImg from "/img/logo.jpg";
import Shoes1 from "/img/p1.png";
import Navbar from "../components/Navbar";
import AvailableShoes from "../components/AvailableShoes";
import Cart from '../components/Cart'

const MainLayout = () => {
  const [cartItem, setCartItem] = useState([]); 

  const products = [
    {
      name: "SoleMates Brown Boots - ",
      price: "119",
      img: Shoes1,
    },
    {
      name: "TrailBlazer Black Sneakers - ",
      price: "89",
      img: Shoes2,
    },
    {
      name: "UrbanWalk White Trainers - ",
      price: "99",
      img: Shoes3,
    },
    {
      name: "PeakPro Hiking Shoes - ",
      price: "139",
      img: Shoes5,
    },
    {
      name: "MetroFlex Loafers - ",
      price: "79",
      img: Shoes4,
    },
    {
      name: "SwiftStep Running Shoes - ",
      price: "109",
      img: LogoImg,
    },
    {
      name: "ClassicTan Formal Shoes - ",
      price: "129",
      img: LogoImg,
    },
    {
      name: "RuggedEdge Combat Boots - ",
      price: "149",
      img: LogoImg,
    },
    {
      name: "CloudSoft Slip-ons - ",
      price: "69",
      img: LogoImg,
    },
    {
      name: "ZenStride Sandals - ",
      price: "59",
      img: LogoImg,
    },
  ];

  const total = cartItem.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  );

  const handleIncreseBtn = (item) => {
    setCartItem((prevCart) =>
      prevCart.map((cart) =>
        cart.name === item.name
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      )
    );
  };

  const decreseQuantity = (item) => {
    setCartItem((prevCart) =>
      prevCart
        .map((cart) =>
          cart.name === item.name
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart
        )
        .filter((cart) => cart.quantity > 0)
    );
  };

  const handleOnClick = (item) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((cart) => cart.name === item.name);
      if (existingItem) {
        return prevCart.map((cart) =>
          cart.name === item.name
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="bg-black p-5">
      <Navbar />
      <div className="py-10 grid grid-cols-2 gap-4">
        <AvailableShoes
          products={products}
          handleOnClick={handleOnClick} />
        <Cart
          cartItem={cartItem}
          handleIncreseBtn={handleIncreseBtn}
          decreseQuantity={decreseQuantity}
          total={total}
        />
      </div>
    </div>
  );
};

export default MainLayout;
