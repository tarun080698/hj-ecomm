import MainLayout from "components/layouts/MainLayout";
import Product from "components/products/Product";
import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  console.log({ id });
  return (
    <MainLayout title="Vani's Botique | Products">
      <div className="flex max-h-full relative">
        <Product />
      </div>
    </MainLayout>
  );
}

export default ProductPage;
