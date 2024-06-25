import useDocumentTitle from "components/common/useTitle";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

function MainLayout({ children, title, classes }) {
  return (
    <div>
      {useDocumentTitle(title)}
      <Navbar classes={classes} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
