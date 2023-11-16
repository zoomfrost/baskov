import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";

const layout = ({ children }) => {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default layout;
