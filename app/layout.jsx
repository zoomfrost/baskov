import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Promo from "@/components/Promo";

const layout = ({ children }) => {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black-100">{children}</body>
    </html>
  );
};

export default layout;
