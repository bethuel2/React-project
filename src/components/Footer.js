import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-17 px-5 grid lg:grid-cols-3 gap-9 text-gray-100">
      <div>
        <h1 className="w-full text-2xl font-bold text-[#00df9a]">React.js</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius
          harum incidunt numquam, perspiciatis ipsum!
        </p>
        <div className="flex justify-between md:w-[75%]my-6 ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaGithub size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between ">
        <div>
          <h6 className="	font-md">Solutions</h6>
          <ul>
            <li className="py-2 text-small">Analytics </li>
            <li className="py-2 text-small">Marketting </li>
            <li className="py-2 text-small">Commerce</li>
            <li className="py-2 text-small">Insights </li>
          </ul>
        </div>
        <div>
          <h6 className="	font-md">Support</h6>
          <ul>
            <li className="py-2 text-small">Pricing </li>
            <li className="py-2 text-small">Documentation </li>
            <li className="py-2 text-small">API status</li>
            <li className="py-2 text-small">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="	font-md">Company</h6>
          <ul>
            <li className="py-2 text-small">About </li>
            <li className="py-2 text-small">Blog </li>
            <li className="py-2 text-small">Jobs</li>
            <li className="py-2 text-small">Press </li>
          </ul>
        </div>
        <div>
          <h6 className="	font-md">Legal</h6>
          <ul>
            <li className="py-2 text-small">Claim </li>
            <li className="py-2 text-small">Policy </li>
            <li className="py-2 text-small">Terms</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
