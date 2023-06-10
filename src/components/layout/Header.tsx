import Image from "next/image";
import logo from "/public/dine_logo.webp";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { Input } from "../ui/input";
const Header = () => {
  return (
    <div>
      <div className="flex bg-red-600 justify-between items-center py-6">
        <Image src={logo} alt="logo" className="w-40" />
        <ul className="flex gap-x-10">
          <li className="text-lg font-bold">
            <Link href={"/"}>Female</Link>
          </li>
          <li className="text-lg font-bold">
            <Link href={"/"}>Male</Link>
          </li>
          <li className="text-lg font-bold">
            <Link href={"/"}>Kids</Link>
          </li>
          <li className="text-lg font-bold">
            <Link href={"/"}>All products</Link>
          </li>
        </ul>
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
