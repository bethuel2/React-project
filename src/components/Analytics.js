import React from "react";
import Laptop from "../Assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-14 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-2" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold"> DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-2xl sm:text-2xl text-1xl font-bold py-1">Manage Data Anayltics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            earum architecto repellendus neque harum amet fugit tempore,
            reprehenderit, veniam mollitia animi consectetur quaerat iure
            consequatur, incidunt ut veritatis dicta! Quam.
          </p>
          <button className="bg-[#0d0f0f] w-[200px] rounded-full font-medium  my-6 max-auto px-5 text-[#00df9a] ">Get Started  </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
