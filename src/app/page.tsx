import React from "react";
import { Button } from "../../components/ui/button";
import { Mail } from "lucide-react";
import { Heart } from "lucide-react";

const page = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <br />
      <Button className="mt-4">
        <Mail className="mr-2 h-4 w-4" /> Send me a mail
      </Button>
      <br />
      <Button className="mt-4">
        <Heart className="mr-2 h-4 w-4" /> Love You Sir
      </Button>
    </div>
  );
};

export default page;
