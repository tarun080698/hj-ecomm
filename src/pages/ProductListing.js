import MainLayout from "components/layouts/MainLayout";
import Products from "components/products";
import React from "react";

function ProductListPage() {
  return (
    <MainLayout title="Vani's Botique | Products">
      <Products />
    </MainLayout>
  );
}

export default ProductListPage;
