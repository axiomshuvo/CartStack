import { IoPlayOutline } from "react-icons/io5";
import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} alt="" className=" rounded-lg " />

          <div className="max-w-1/2 mr-10 space-y-6 ">
            <div className="ari-status flex w-fit items-center gap-2 py-2 px-5 bg-[#E1E7FF] bg-opacity-5 rounded-full  ">
              <div className="inline-grid *:[grid-area:1/1] ">
                <div className="status bg-theme-gradient animate-ping"></div>
                <div className="status bg-theme-gradient "></div>
              </div>
              <span className="text-base theme-text">
                New: AI-Powered Tools Available
              </span>
            </div>

            <h1 className="text-7xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className=" max-w-lg">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center gap-2">
              <a id="#products" className="btn theme-bg ">
                Explore Products
              </a>
              <a className="btn btn-outline text-purple-500 rounded-full border-purple-500  hover:text-white hover:bg-purple-500 ml-4">
                <IoPlayOutline /> Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
