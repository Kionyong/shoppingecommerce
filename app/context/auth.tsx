'use client';
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
type UserType = {
      email: string;
      password: string;
};

type AuthType = {
      user: UserType | null;
      register: (data: UserType) => void;
      login: (data: UserType) => boolean;
      logout: () => void;
      cart: any[];
      products: any[];
      addToCarts: (product: any) => void;
      additionQty: (product: any) => void;
      subtraction: (product: any) => void;
      removeCart: (product: any) => void;
      getTotalPrice: () => number;
};

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({
      children,
}: {
      children: React.ReactNode;
}) => {
      const [mounted, setMounted] = useState(false);

      const [user, setUser] = useState<UserType | null>(null);
      const [products, setProduct] = useState<any[]>([]);
      const [cart, setCart] = useState<any[]>([]);

      useEffect(() => {
            setMounted(true);

            const store = localStorage.getItem("user");

            if (store) {
                  setUser(JSON.parse(store));
            }

            const getData = async () => {
                  try {
                        const data = await fetch(
                              "https://fakestoreapi.com/products"
                        );

                        const res = await data.json();

                        setProduct(res);
                  } catch (err: any) {
                        console.log("error :", err.message);
                  }
            };

            getData();
      }, []);

      const register = (data: UserType) => {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
      };

      const login = (data: UserType) => {
            const stored = localStorage.getItem("user");

            if (!stored) return false;

            const parsed = JSON.parse(stored);

            if (
                  parsed.email === data.email &&
                  parsed.password === data.password
            ) {
                  setUser(parsed);

                  return true;
            }

            return false;
      };

      const logout = () => {
            setUser(null);
      };

      const addToCarts = (product: any) => {
            if (!user) {
                  toast.error("Please login first");
                  return;
            }
            setCart((prev: any[]) => {
                  const isCart = prev.find(
                        (i) => i.id === product.id
                  );

                  if (isCart) {
                        return prev.map((item) =>
                              item.id === product.id
                                    ? {
                                          ...item,
                                          qty: item.qty + 1,
                                    }
                                    : item
                        );
                  }

                  return [...prev, { ...product, qty: 1 }];
            });
      };

      const additionQty = (product: any) => {
            setCart((prev) =>
                  prev.map((items) =>
                        items.id === product.id
                              ? {
                                    ...items,
                                    qty: items.qty + 1,
                              }
                              : items
                  )
            );
      };

      const subtraction = (product: any) => {
            setCart((prev) =>
                  prev.map((items) =>
                        items.id === product.id &&
                              items.qty > 1
                              ? {
                                    ...items,
                                    qty: items.qty - 1,
                              }
                              : items
                  )
            );
      };

      const removeCart = (product: any) => {
            setCart((prev) =>
                  prev.filter((i) => i.id !== product.id)
            );
      };

      const getTotalPrice = () => {
            return cart.reduce(
                  (acc, item) =>
                        acc + item.price * item.qty,
                  0
            );
      };

      // prevent hydration mismatch
      if (!mounted) return null;

      return (
            <AuthContext.Provider
                  value={{
                        user,
                        register,
                        login,
                        logout,
                        cart,
                        products,
                        addToCarts,
                        additionQty,
                        subtraction,
                        removeCart,
                        getTotalPrice,
                  }}
            >
                  {children}
            </AuthContext.Provider>
      );
};

export const useAuth = () => {
      const context = useContext(AuthContext);

      if (!context) {
            throw new Error(
                  "useAuth must be inside provider"
            );
      }

      return context;
};