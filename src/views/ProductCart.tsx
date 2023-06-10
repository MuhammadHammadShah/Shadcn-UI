import Image, { StaticImageData } from "next/image";
import p1 from "/public/p1.webp";
const ProductCart = (props: {
  title: string;
  price: number;
  image: StaticImageData;
  alt: string;
}) => {
  return (
    <div>
      <Image src={props.image} alt={props.alt} />
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
    </div>
  );
};

export default ProductCart;
