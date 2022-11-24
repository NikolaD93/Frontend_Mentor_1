import React from "react";
import header from "../assets/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <header className="my-12 gap-9 flex flex-col sm:flex-row">
      <div className="left">
        <div className="img-wrapper">
          <img
            src={header}
            alt="header"
            className="h-[350px] w-[1200px] object-cover"
          />
        </div>
        <div className="text-wrapper flex flex-col mt-6 sm:flex-row sm:mt-10">
          <div className="first basis-1 sm:basis-1/2">
            <h1 className="text-5xl font-[800] capitalize sm:text-6xl">
              The bright <br /> future of <br /> Web 3.0?
            </h1>
          </div>
          <div className="second sm:basis-1/2">
            <p className="my-5 sm:my-0">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button className="bg-softRed text-offWhite px-8 py-3 my-6 uppercase tracking-[5px] hover:bg-veryDarkBlue transition sm:mt-10 sm:mb-0">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="right bg-veryDarkBlue px-4 py-6 h-[520px] sm:basis-1/3 sm:px-6 sm:py-10 sm:h-[580px]">
        <div>
          <h2 className="text-5xl font-bold text-softOrange">New</h2>
          <h4 className="text-2xl text-offWhite font-bold mt-8 hover:text-softOrange cursor-pointer">
            Hydrogen VS Electric cars
          </h4>
          <p className="text-white opacity-60 mt-2">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="opacity-60 my-7" />
          <h4 className="text-2xl text-offWhite font-bold mt-8 hover:text-softOrange cursor-pointer">
            The downsides of AI Artistry
          </h4>
          <p className="text-white opacity-60 mt-2">
            What are the possible adverse effects of on-demand AI image
            generation
          </p>
          <hr className="opacity-60 my-7" />
          <h4 className="text-2xl text-offWhite font-bold mt-8 hover:text-softOrange cursor-pointer">
            Is VC Funding Drying Up
          </h4>
          <p className="text-white opacity-60 mt-2">
            Private funding by VC firms is 50% YOY. We take a lot a look at what
            that means.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
