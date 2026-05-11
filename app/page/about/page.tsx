'use client';

export default function AboutPage() {
      return (
            <main className="min-h-screen px-6 py-10 bg-gray-50">
                  <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
                        <h1 className="text-3xl font-bold mb-4">About Us</h1>

                        <p className="text-gray-700 leading-7 mb-4">
                              Welcome to our shopping platform. We provide high-quality products
                              at affordable prices using data from a trusted API source.
                        </p>

                        <p className="text-gray-700 leading-7 mb-4">
                              Our goal is to build a fast, modern, and user-friendly e-commerce
                              experience using Next.js, React, and modern web technologies.
                        </p>

                        <p className="text-gray-700 leading-7">
                              We focus on performance, simplicity, and a smooth shopping experience
                              for all users.
                        </p>
                  </div>
            </main>
      );
}