"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
interface CartItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center my-4 border p-4 rounded shadow">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="w-16 h-16 mr-4 rounded"
              />
              <div className="flex-grow">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-gray-700">Price: ${item.price ? item.price.toFixed(2) : "0.00"}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">
            Total Price: ${totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}
