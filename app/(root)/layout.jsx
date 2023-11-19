import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <body className="min-h-screen bg-black-100">
        <Navbar />
        <Promo />
        <main className="flex-center max-w-screen-2xl paddings mx-auto w-full flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </>
  );
};

export default layout;
