import Image from "next/image";
import "../globals.css";
import Link from "next/link";
export default function Slide(){
      return(
            <main className="min-w-full h-auto sm:h-80 lg:h-95 shadow">
                  <div className="flex flex-col sm:flex-row lg:flex-row justify-around items-center">
                        <div className="flex justify-center flex-col pt-4 sm:pt-6 lg:pt-8">
                              <h1 className="text-4xl font-bold px-10 sm:px-6 lg:px-8">Titles</h1>
                              <p className="text-[15px] font-medium px-6 sm:px-6 lg:px-8 p-3">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ex.
                              </p>
                              <Link href="/page/product" className="px-6 sm:px-6 lg:px-8">
                                    <button type="button"
                                          className="w-40 h-8 sm:h-10 lg:h-12 border-0 outline-0 rounded-lg bg-gray-400 text-white"
                                    >
                                          SHOP
                                    </button>
                              </Link>
                              
                        </div>
                        <div className="mt-4 sm:mt-6 lg:mt-8">
                              <Image src={"/shoppping1.png"} width={200} height={150} alt="error"/>
                        </div>
                  </div>
            </main>
            
      );
}