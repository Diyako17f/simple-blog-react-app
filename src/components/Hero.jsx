import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col  items-center justify-center mt-40 w-full gap-5">
      <h1 className="text-3xl max-w-[30vw] text-center font-mulish font-bold">
        {" "}
        <span className="gradient">Welcome</span> to my blog my name is{" "}
        <span className="gradient">Diyako .</span>
      </h1>
      <p className="font-lato text-xl text-center">
        if you tech and IT lover this place for you my friend enjoy my blogs and
        share the content to your fox !
      </p>
    </section>
  );
};

export default Hero;
