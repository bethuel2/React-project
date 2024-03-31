import React from "react";
import Single from "../Assets/single.png";
import Tripple from "../Assets/tripple.png";
import Double from "../Assets/double.png";

const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full flex flex-col py-5 my-4 hover:scale-105 duration-300  shadow-lg rounded-md ">
          <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt="/" />
          <h1 className="text-2xl font-bold text-center  py-4 ">Single user</h1>
          <p className="text-center text-2xl font-bold">$149</p>
          <div className="p-4 text-center font-medium">
            <p className="py-1 border-b mx-8 mt-3">1 granted user</p>
            <p className="py-1 border-b mx-8">156 GB Storage</p>
            <p className="py-1 border-b mx-8">Send up to 1BG </p>
          </div>
          <button className="bg-[#00df9a] rounded-full w-40 mx-auto mt-5 text-black ">
            Start trial
          </button>
        </div>
        <div className="w-full flex flex-col py-5 my-4 hover:scale-105 duration-300  shadow-lg rounded-md ">
          <img className="w-20 mx-auto mt-[-3rem]" src={Tripple} alt="/" />
          <h1 className="text-2xl font-bold text-center  py-4 ">Tripple users</h1>
          <p className="text-center text-2xl font-bold">$170</p>
          <div className="p-4 text-center font-medium">
            <p className="py-1 border-b mx-8 mt-3">3 granted users</p>
            <p className="py-1 border-b mx-8">500 GB Storage</p>
            <p className="py-1 border-b mx-8">Send up to 2BG </p>
          </div>
          <button className="bg-[#00df9a] rounded-full w-40 mx-auto mt-5 text-black ">
            Start trial
          </button>
        </div>
        <div className="w-full flex flex-col py-5 my-4 hover:scale-105 duration-300  shadow-lg rounded-md ">
          <img className="w-20 mx-auto mt-[-3rem]" src={Double} alt="/" />
          <h1 className="text-2xl font-bold text-center  py-4 ">Double  users</h1>
          <p className="text-center text-2xl font-bold">$160</p>
          <div className="p-4 text-center font-medium">
            
            <p className="py-1 border-b mx-8 mt-3">2 granted users</p>
            <p className="py-1 border-b mx-8">256 GB Storage</p>
            <p className="py-1 border-b mx-8">Send up to 2BG </p>
          </div>
          <button className="bg-[#00df9a] rounded-full w-40 mx-auto mt-5 text-black ">
            Start trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
