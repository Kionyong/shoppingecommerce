'use client';
import Link from "next/link";
import "../globals.css";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { PiShoppingCartThin } from "react-icons/pi";
import { useAuth } from "../context/auth";

export default function NavBar() {
      const [open, setOpen] = useState(false);
      const [cartOpen, setCartOpen] = useState(false);
      const { cart, additionQty, subtraction, removeCart, getTotalPrice } =useAuth();
      return (
            <nav className="w-full backdrop-blur-md">

                  {/* MAIN NAV */}
                  <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

                        {/* LOGO */}
                        <Link href="/">
                              <h1 className="text-2xl font-black">SHOPPING</h1>
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden sm:flex items-center gap-6 text-black">

                              <Link href="/page/product" className="hover:text-red-600">
                                    Products
                              </Link>

                              <Link href="/page/about" className="hover:text-red-600">
                                    About
                              </Link>

                              <Link href="/user/login" className="hover:text-red-600">
                                    Login
                              </Link>

                              <Link href="/page/account" className="hover:text-red-600">
                                    Account
                              </Link>

                              {/* CART */}
                              <button
                                    onClick={() => setCartOpen(true)}
                                    className="relative"
                              >
                                    <PiShoppingCartThin size={28} />

                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                          {cart.length}
                                    </span>
                              </button>

                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                              type="button"
                              className="sm:hidden"
                              onClick={() => setOpen(!open)}
                        >
                              {open ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>

                  </div>

                  {/* MOBILE MENU */}
                  {open && (
                        <div className="sm:hidden fixed top-0 left-0 w-1/2 h-screen bg-black text-white p-5 z-50">

                              <div className="mb-6">
                                    <Link href="/" className="text-xl font-black">
                                          SHOPPING
                                    </Link>
                              </div>

                              <div className="flex flex-col gap-4">

                                    <Link href="/page/product">Products</Link>
                                    <Link href="/page/about">About</Link>
                                    <Link href="/user/login">Login</Link>
                                    <Link href="/page/account">Account</Link>
                                    <button
                                          onClick={() => setCartOpen(true)}
                                          className="relative"
                                    >
                                          <PiShoppingCartThin size={28} />

                                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                                {cart.length}
                                          </span>
                                    </button>

                              </div>

                        </div>
                  )}

                  {cartOpen && (
                        <div className="fixed top-0 right-0 w-[300px] h-auto bg-white shadow-lg z-50 p-4">

                              {/* Header */}
                              <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold">Cart</h2>
                                    <button onClick={() => setCartOpen(false)}>
                                          <FiX size={24} />
                                    </button>
                              </div>

                              {/* Cart Items */}
                              <div className="space-y-3">
                                    {cart.length === 0 ? (
                                          <p className="text-gray-500">No items yet</p>
                                    ) : (
                                          cart.map((item: any) => (
                                                <div
                                                      key={item.id}
                                                      className="flex gap-3 border-b pb-2"
                                                >
                                                      {/* image */}
                                                      <img
                                                            src={item.image}
                                                            className="w-12 h-12 object-contain"
                                                      />

                                                      {/* details */}
                                                      <div className="flex-1">
                                                            <p className="text-sm font-medium line-clamp-1">
                                                                  {item.title}
                                                            </p>

                                                            <p className="text-xs text-gray-500">
                                                                  ${item.price}
                                                            </p>

                                                            <p className="text-xs">
                                                                  Qty: {item.qty}
                                                            </p>
                                                            <button 
                                                                  onClick={() => additionQty(item)}
                                                                  type="button"
                                                                  className="w-6 h-6 text-center bg-black text-white border-0 outline-0 rounded-lg"
                                                            >
                                                                  +
                                                            </button>
                                                            <button 
                                                                  onClick={() => subtraction(item)}
                                                                  type="button"
                                                                  className="ms-3 w-6 h-6 text-center bg-black text-white border-0 outline-0 rounded-lg"
                                                            >
                                                                  -
                                                            </button>
                                                            <button
                                                                  onClick={() => removeCart(item)}
                                                                  type="button"
                                                                  className="ms-3 text-[10px] w-16 h-6 text-center bg-red-600 text-white border-0 outline-0 rounded-lg"
                                                            >
                                                                  Delete
                                                            </button>
                                                          
                                                      </div>
                                                </div>
                                          ))
                                    )}
                              </div>
                              <p>{getTotalPrice()}</p>
                              <Link href={'/page/checkout'}>
                                    <button
                                          type="button"
                                          className="w-30 h-8 bg-green-500 cursor-pointer rounded-lg"
                                    >
                                          Checkout
                                    </button>
                              </Link>
                        </div>
                  )}

            </nav>
      );
}