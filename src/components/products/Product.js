import React, { useEffect, useState } from "react";

import { products } from "assets/data/dummydata";
import Breadcrumb from "components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import ProductCarousal from "./ProductCarousal";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(
    products.filter((item) => item.code === id?.split("_")[1])[0]
  );
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const links = [{ name: id }];

  useEffect(() => {
    setProduct(products.filter((item) => item.code === id?.split("_")[1])[0]);
  }, [id]);

  return (
    <div className="container px-4 md:px-8 pt-8">
      <div>
        <Breadcrumb links={links} />
      </div>
      <div className="flex h-full max-h-full relative">
        <div className="flex sticky top-[150px] overflow-auto h-auto">
          <div className="w-2/12 pr-8">
            <ProductCarousal
              images={product?.additional_images_url}
              currentImgIndex={currentImgIndex}
              setCurrentImgIndex={setCurrentImgIndex}
            />
          </div>
          <div className="4/12 pt-10">
            <img
              src={product?.additional_images_url[currentImgIndex]}
              alt={id}
              className="w-96 h-auto"
            />
          </div>
        </div>
        <div className="overflow-y-auto w-6/12 pt-10">
          <img
            src={product?.additional_images_url[currentImgIndex]}
            alt={id}
            className="w-96 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
