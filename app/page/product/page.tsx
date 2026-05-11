'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";
import { useAuth } from "@/app/context/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Products() {
      const [products, setProducts] = useState<any[]>([]);
      const { addToCarts, user } = useAuth();
      const router = useRouter();
      useEffect(() => {
            const getData = async () => {
                  const res = await fetch("https://fakestoreapi.com/products");
                  const data = await res.json();
                  setProducts(data);
            };
            getData();
      }, []);

      if (!products.length)
            return <div className="w-full h-100 flex justify-center items-center">Loading...</div>;

      return (
            <main className="min-h-screen py-10">
                  <h1 className="text-center text-2xl font-bold mb-6">
                        Products
                  </h1>

                  <div className="w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((item: any) => (
                              <div
                                    key={item.id}
                                    className="border-0 shadow shadow-gray-400 rounded-lg flex flex-col p-4"
                              >
                                    <div className="w-full h-[60%] flex justify-center items-center">
                                          <Link
                                                href={`/page/product/${item.id}`}
                                                className="flex justify-center items-center"
                                          >
                                          <Image
                                                src={item.image}
                                                width={150}
                                                height={100}
                                                alt={item.title}
                                          />
                                          </Link>
                                    </div>


                                    <div className="mt-4 flex flex-col gap-2">
                                          <h1 className="line-clamp-1 font-medium">
                                                {item.title}
                                          </h1>

                                          <p>${item.price}</p>

                                          <button
                                                
                                                onClick={() => {
                                                      if(!user){
                                                            return router.push('/user/login');
                                                      }
                                                      addToCarts(item);
                                                      toast.success("Added to cart");
                                                }}
                                                type="button"
                                                className="w-full h-10 rounded-lg bg-gray-500 text-white"
                                          >
                                                Add Cart
                                          </button>
                                    </div>
                              </div>
                        ))}
                  </div>
            </main>
      );
}