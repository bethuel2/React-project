import React from "react";


const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen max-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2"> GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-4xl sm:text-5xl text-3xl font-bold md:py-6">Grow with data</h1>
        <div>
          <p className="md:text-4xl sm:text-2xl text-2xl font-bold py-2"> Fast, flexible financing for </p>
          <div> 
            <p className="md:text-1xl  text-1xl font-bold text-gray-500"> Monitor your data analytics to increase revenue for BTB BTC AND SAAS platform</p>
            <button className="bg-[#00df9a] w-[200px] rounded-full font-medium  my-6 max-auto px-5 text-black ">Get Started  </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
