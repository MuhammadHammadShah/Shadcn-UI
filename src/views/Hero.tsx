import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import heroImage from "../../public/hero.webp";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-y-10 py-6">
        {/* Left div with content */}
        <div className="flex-1">
          <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700  ">
            Badge
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            The Joke Tax Chronicles
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Button className="bg-black flex gap-2  justify-between h-10 px-4 mt-4">
            <ShoppingCartIcon />
            Start Shopping
          </Button>
        </div>
        {/* Right div with Image */}
        <div className="flex-1">
          <Image src={heroImage} alt="Hero_page Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
