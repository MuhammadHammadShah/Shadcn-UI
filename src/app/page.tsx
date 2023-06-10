import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />

      {/* Prodcuts */}
      <ProductList />
    </div>
  );
};

export default page;
