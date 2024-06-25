import MainLayout from "components/layouts/MainLayout";
import Products from "components/products";
import React from "react";

function ProductListPage() {
  return (
    <MainLayout title="Vani's Botique | Products" classes="sticky top-0">
      <Products />
    </MainLayout>
  );
}

export default ProductListPage;
