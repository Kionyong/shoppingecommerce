'use client';
import Link from "next/link";
export default function Footer() {
      return (
            <footer className="bg-gray-900 text-white mt-10">
                  <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

                        {/* Brand */}
                        <div>
                              <h2 className="text-xl font-bold mb-3">MyShop</h2>
                              <p className="text-gray-400">
                                    Modern e-commerce built with Next.js and FakeStore API.
                              </p>
                        </div>

                        {/* Links */}
                        <div>
                              <h3 className="font-semibold mb-3">Quick Links</h3>
                              <ul className="space-y-2 text-gray-400">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/page/about">About</Link></li>
                                    <li><Link href="/page/account">Account</Link></li>
                              </ul>
                        </div>

                        {/* Contact */}
                        <div>
                              <h3 className="font-semibold mb-3">Contact</h3>
                              <p className="text-gray-400">Email: support@myshop.com</p>
                              <p className="text-gray-400">Phone: +855 000 000</p>
                        </div>

                  </div>

                  <div className="border-t border-gray-700 text-center py-4 text-gray-500">
                        © {new Date().getFullYear()} MyShop. All rights reserved.
                  </div>
            </footer>
      );
}