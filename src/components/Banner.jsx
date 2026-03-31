import { IoPlayOutline } from "react-icons/io5";
import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} alt="" className=" rounded-lg " />
        <div className="max-w-1/2 mr-10">
          <h1 className="text-7xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating fasterhh today. Explore
            Products
          </p>

          <a id="#products" className="btn theme-bg ">
            Explore Products
          </a>
          <a className="btn btn-outline text-purple-500 rounded-full border-purple-500  hover:text-white hover:bg-purple-500 ml-4">
            <IoPlayOutline /> Watch Demo
          </a>
        </div>
      </div>
    </div>
  );
}
