'use client';

import { useAuth } from "@/app/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
      const { user, cart, logout } = useAuth();
      const router = useRouter();

      useEffect(() => {
            if (!user) {
                  router.push("/user/login");
            }
      }, [user, router]);

      if (!user) return null;

      const totalItems = cart.reduce(
            (acc, item) => acc + item.qty,
            0
      );

      const totalPrice = cart.reduce(
            (acc, item) =>
                  acc + item.price * item.qty,
            0
      );

      return (
            <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

                  <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">

                        {/* HEADER */}
                        <div className="text-center mb-8">
                              <h1 className="text-3xl font-bold text-gray-800">
                                    My Account
                              </h1>
                              <p className="text-gray-500 mt-1">
                                    Manage your profile & orders
                              </p>
                        </div>

                        {/* USER INFO CARD */}
                        <div className="bg-gray-50 rounded-xl p-5 mb-6">
                              <p className="text-gray-700">
                                    <span className="font-semibold">
                                          Email:
                                    </span>{" "}
                                    {user.email}
                              </p>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-2 gap-4 mb-6">

                              <div className="bg-blue-100 p-4 rounded-xl text-center">
                                    <p className="text-sm text-gray-600">
                                          Items in Cart
                                    </p>
                                    <h2 className="text-2xl font-bold text-blue-600">
                                          {totalItems}
                                    </h2>
                              </div>

                              <div className="bg-green-100 p-4 rounded-xl text-center">
                                    <p className="text-sm text-gray-600">
                                          Total Price
                                    </p>
                                    <h2 className="text-2xl font-bold text-green-600">
                                          ${totalPrice.toFixed(2)}
                                    </h2>
                              </div>

                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col gap-3">

                              <button
                                    onClick={() =>
                                          router.push("/page/checkout")
                                    }
                                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                              >
                                    Go to Checkout
                              </button>

                              <button
                                    onClick={() => {
                                          logout();
                                          router.push("/user/login");
                                    }}
                                    className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
                              >
                                    Logout
                              </button>

                        </div>

                  </div>
            </main>
      );
}