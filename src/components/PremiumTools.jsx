import { Suspense } from "react";
import Card from "./Card";

export default function PremiumTools({ toollist }) {
  return (
    <div className="container mx-auto py-12  text-center space-y-5">
      <div className="w-full lg:w-2/3 mx-auto space-y-5">
        <h1 className=" font-extrabold text-5xl">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center ">
        <div
          role="tablist"
          className="tabs-lg w-fit rounded-full tabs  shadow-sm "
        >
          <a
            role="tab"
            className="tab  rounded-full bg-theme-gradient text-white tab-active"
          >
            Products
          </a>
          <a role="tab" className="tab ">
            Cart
          </a>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-bars  loading-xl bg-theme-gradient  loading-xs"></span>
            <span className="loading loading-bars loading-xl  bg-theme-gradient loading-sm"></span>
            <span className="loading loading-bars loading-xl  bg-theme-gradient loading-md"></span>
            <span className="loading loading-bars loading-xl  bg-theme-gradient loading-lg"></span>
            <span className="loading loading-bars loading-xl  bg-theme-gradient loading-xl"></span>
          </div>
        }
      >
        <div className="tool-list p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card toollist={toollist} />
        </div>
      </Suspense>
    </div>
  );
}
