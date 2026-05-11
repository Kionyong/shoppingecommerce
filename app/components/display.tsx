'use client';
import Image from "next/image";
import { useAuth } from "../context/auth";
import "../globals.css";
import Slide from "./slide";
export default function DisplayItems(){
      const {products} = useAuth();
      console.log(products,'=============');
      return(
            <main>
                  <Slide />
                  <div className="w-10/12 h-auto mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {
                        products.slice(0,4).map((item:any)=>(
                              <div className="bg-white shadow rounded-lg shadow-mauve-400 h-100" key={item.id}>
                                    <div className="flex justify-center items-center h-[60%]">
                                          <Image src={item.image} width={150} height={150} alt={item.title} />
                                    </div>
                                    <div className="h-[40%] w-full p-8">
                                          <h1 className="text-[15px] font-medium">{item.title}</h1>
                                          <p className="text-[15px] text-blue-500">{item.price}</p>
                                    </div>
                              </div>
                        ))
                  }

                  </div>
            </main>
      )
}