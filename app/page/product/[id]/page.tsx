'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { use } from "react";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAuth } from "@/app/context/auth";
import toast from "react-hot-toast";
export default function ProductDetail({ params }: any) {
      const [product, setProduct] = useState<any>(null);
      const {addToCarts} =useAuth();
      const { id }: any = use(params);
      useEffect(() => {
            const getProduct = async () => {
                  const res = await fetch(
                        `https://fakestoreapi.com/products/${id}`
                  );

                  const data = await res.json();
                  setProduct(data);
            };

            getProduct();
      }, [id]);

      if (!product) return <div className="w-full h-100 flex justify-center items-center">Loading...</div>;

      return (
            <main className="w-full">
                  <Link href={'/page/product'} className="ms-5 w-full">
                       <span className="w-15 h-8 bg-cyan-200">
                              <IoIosArrowRoundBack className="ms-8" size={29} />
                       </span>
                  </Link>
                  <div className="p-10 max-w-md mx-auto">
                        <Image
                              width={150}
                              height={100}
                              alt={product.title}
                              src={product.image}
                              className="w-full h-60 object-contain"
                        />

                        <h1 className="text-xl font-bold mt-4">
                              {product.title}
                        </h1>

                        <p className="text-gray-500">{product.category}</p>

                        <p className="text-green-600 font-bold">
                              ${product.price}
                        </p>

                        <p className="mt-3 text-sm">
                              {product.description}
                        </p>
                         <button 
                              type="button" 
                              className="cursor-pointer active:bg-gray-400 duration-200 
                              w-50 mt-5 h-10 border-0 outline-0 rounded-lg bg-gray-500"
                              onClick={()=>{addToCarts(product); toast.success('add cart success')}}
                        >
                              Add Cart
                        </button>
                  </div>
            </main>

      );
}