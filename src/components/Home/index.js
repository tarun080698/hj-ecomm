import Category from "components/Banners/CategorySection";
import ImageCarousel from "components/Banners/ImageCarousel";
import ContactUs from "components/Footer/ContactUs";
import FAQ from "components/Footer/FAQ";
import React from "react";

function Home() {
  return (
    <>
      <ImageCarousel />
      <Category />
      <FAQ />
      <ContactUs />
    </>
  );
}

export default Home;
