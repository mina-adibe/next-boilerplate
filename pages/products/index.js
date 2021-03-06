import React, { useEffect } from "react";
import MainLayout from "../../components/layouts/mainLayout";
import ProductCard from "../../components/productCard";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../../store/products/actions";

function Products () {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(requestProducts());
  }, []);

  const renderProducts = () => {
    return Object.values(products).map((products, index) => {
      return (
        <div className="col-md-3 mb-4 d-flex align-items-stretch" key={index}>
          <ProductCard data={products} isClickable={true} />
        </div>
      );
    });
  };

  return (
    <div className="row container mx-auto my-5">
      {renderProducts()}
    </div>
  );
};

Products.Layout = MainLayout;

export default Products;
