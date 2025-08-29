import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import AnimatedWrapper from "@/components/animationWrapper.js";

const roboto = Roboto({
  // variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "700","800", "900"], // Add the weights you need
});

export const metadata = {
  title: "Inclusive Care - Special Needs Children",
  description: "Providing inclusive care for children with special needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased font-sans`}>
        <Navbar />
        <AnimatedWrapper>
        <main>{children}</main></AnimatedWrapper>
        <Footer />
      </body>
    </html>
  );
}