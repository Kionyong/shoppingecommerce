'use client';

import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
      const { login } = useAuth();
      const router = useRouter();

      const [form, setForm] = useState({
            email: "",
            password: "",
      });
      const [showPassword, setShowPassword] = useState(false);
      const submit = (e: React.FormEvent) => {
            e.preventDefault();

            const success = login(form);

            if (success) {
                  router.push("/page/account");
            } else {
                  alert("Invalid email or password");
            }
      };

      return (
            <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

                  <form
                        onSubmit={submit}
                        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6"
                  >

                        <h1 className="text-2xl font-bold text-center text-gray-800">
                              Login
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
                                    className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
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
                                    onChange={(e) =>
                                          setForm({
                                                ...form,
                                                password: e.target.value,
                                          })
                                    }
                                    className="w-full mt-1 px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                              />
                        </div>
                        <div className="flex items-center gap-2">
                              <input
                                    type="checkbox"
                                    onChange={(e) =>
                                          setShowPassword(e.target.checked)
                                    }
                              />

                              <p className="text-sm text-gray-600">
                                    Show password
                              </p>
                        </div>

                        {/* Button */}
                        <button
                              type="submit"
                              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                        >
                              Login
                        </button>

                        {/* Footer text */}
                        <Link href={'/user/register'}>
                              <p className="text-center text-sm text-gray-500">
                                    Already have an account?{" "}
                                    <span className="text-green-500 cursor-pointer">
                                          Register
                                    </span>
                              </p>
                        </Link>

                  </form>
            </main>
      );
}