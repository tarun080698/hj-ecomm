import useDocumentTitle from "components/common/useTitle";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

function MainLayout({ children, title }) {
  return (
    <div className="max-h-full">
      {useDocumentTitle(title)}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
