import Category from "components/Banners/Category";
import ImageCarousel from "components/Banners/ImageCarousel";
import ContactUs from "components/Footer/ContactUs";
import FAQ from "components/Footer/FAQ";
import Footer from "components/Footer/Footer";
// import Footer from "components/Footer/FAQ";
import Navbar from "components/Navbar/Navbar";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <Category />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
