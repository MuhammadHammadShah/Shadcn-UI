import ProductCart from "./ProductCart";
import p1 from "/public/p1.webp";
const ProductList = () => {
  return (
    <div className="flex justify-evenly">
      <ProductCart title="Product1" price={104} image={p1} alt="product_1" />
      <ProductCart title="Product4" price={14} image={p1} alt="product_1" />
      <ProductCart title="Product3" price={67} image={p1} alt="product_1" />
    </div>
  );
};

export default ProductList;
