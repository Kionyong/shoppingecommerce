'use client';
import { useAuth } from "@/app/context/auth";
import Image from "next/image";
import { FaPaypal } from "react-icons/fa";

export default function Checkout() {
      const { cart, getTotalPrice } = useAuth();
      const total = cart.reduce(
            (acc, item) => acc + item.price * item.qty,
            0
      );
      return (
            <main className="w-full min-h-screen bg-gray-100 py-10">
                  <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 gap-8">

                        {/* LEFT SIDE */}
                        <div className="bg-white rounded-2xl shadow p-6">
                              <h1 className="text-2xl font-bold mb-6">
                                    Checkout
                              </h1>

                              <div className="flex flex-col gap-5">
                                    {cart.map((item: any) => (
                                          <div
                                                key={item.id}
                                                className="flex items-center gap-4 border-b pb-4"
                                          >
                                                <Image
                                                      src={item.image}
                                                      width={70}
                                                      height={70}
                                                      alt={item.title}
                                                      className="object-contain"
                                                />

                                                <div className="flex-1">
                                                      <h2 className="line-clamp-1 font-medium">
                                                            {item.title}
                                                      </h2>

                                                      <p className="text-gray-500">
                                                            Qty: {item.qty}
                                                      </p>
                                                </div>

                                                <h3 className="font-bold">${(item.price * item.qty).toFixed(2)}</h3>
                                          </div>
                                    ))}
                              </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-white rounded-2xl shadow p-6 h-fit">
                              <h1 className="text-2xl font-bold mb-6">
                                    Payment
                              </h1>

                              {/* TOTAL */}
                              <div className="flex justify-between items-center mb-5">
                                    <span className="text-lg font-medium">
                                          Total:
                                    </span>

                                    <span className="text-2xl font-bold">
                                          ${total.toFixed(2)}
                                    </span>
                              </div>

                              {/* PAYPAL BUTTON */}
                              <button
                                    className="w-full h-12 rounded-xl bg-yellow-400
                                    hover:bg-yellow-300 duration-200
                                    flex justify-center items-center gap-3
                                    text-black font-bold text-lg"
                              >
                                    <FaPaypal className="text-2xl" />
                                    Pay with PayPal
                              </button>

                              {/* CARD FORM */}
                              <div className="mt-8 flex flex-col gap-4">
                                    <input
                                          type="text"
                                          placeholder="Card Holder Name"
                                          className="w-full h-12 border rounded-lg px-4 outline-none"
                                    />

                                    <input
                                          type="text"
                                          placeholder="Card Number"
                                          className="w-full h-12 border rounded-lg px-4 outline-none"
                                    />

                                    <div className="grid grid-cols-2 gap-4">
                                          <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full h-12 border rounded-lg px-4 outline-none"
                                          />

                                          <input
                                                type="text"
                                                placeholder="CVV"
                                                className="w-full h-12 border rounded-lg px-4 outline-none"
                                          />
                                    </div>

                                    <button
                                          className="w-full h-12 rounded-xl
                                          bg-black text-white font-semibold
                                          hover:bg-gray-800 duration-200"
                                    >
                                          Complete Payment
                                    </button>
                              </div>
                        </div>
                  </div>
            </main>
      );
}