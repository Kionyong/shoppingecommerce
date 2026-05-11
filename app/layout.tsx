'use client';
import { AuthProvider } from "./context/auth";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
          <AuthProvider>
            <NavBar />
            <main>{children}</main>
            <Toaster position="top-right" />
            <Footer />
          </AuthProvider>
      </body>
    </html>
  );
}