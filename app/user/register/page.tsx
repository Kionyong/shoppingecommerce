'use client';

import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
      const { register } = useAuth();
      const router = useRouter();

      const [form, setForm] = useState({
            email: "",
            password: "",
      });
      const [showPassword, setShowPassword] = useState(false);
      const submit = (e: React.FormEvent) => {
            e.preventDefault();

            register(form);
            router.push("/user/login");
      };

      return (
            <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

                  <form
                        onSubmit={submit}
                        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6"
                  >

                        <h1 className="text-2xl font-bold text-center text-gray-800">
                              Create Account
                        </h1>

                        {/* Email */}
                        <div>
                              <label className="text-sm text-gray-600">
                                    Email
                              </label>
                              <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) =>
                                          setForm({
                                                ...form,
                                                email: e.target.value,
                                          })
                                    }
                                    className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                              />
                        </div>

                        {/* Password */}
                        <div>
                              <label className="text-sm text-gray-600">
                                    Password
                              </label>
                              <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    onChange={(e) =>
                                          setForm({
                                                ...form,
                                                password: e.target.value,
                                          })
                                    }
                                    className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"

                              />
                        </div>
                        <div className="flex items-center gap-2">
                              <input
                                    type="checkbox"
                                    required
                                    onChange={(e) =>
                                          setShowPassword(e.target.checked)
                                    }
                              />

                              <p className="text-sm text-gray-600">
                                    Show password
                              </p>
                        </div>

                        <button
                              type="submit"
                              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
                        >
                              Register
                        </button>

                  </form>
            </main>
      );
}