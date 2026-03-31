import { Suspense, useState } from "react";
import CartList from "./CartList";
import SingleProduct from "./SingleProduct";

export default function PremiumTools({
  toollist,
  selectedPacklist,
  setSelectedPacklist,
}) {
  const [activeTab, setActiveTab] = useState("products");

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
            className={`tab ${activeTab === "products" ? " rounded-full bg-theme-gradient text-white tab-active" : ""}`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "cart" ? " rounded-full bg-theme-gradient text-white tab-active" : ""}`}
            onClick={() => setActiveTab("cart")}
          >
            Cart{" "}
            {selectedPacklist.length > 0 && (
              <span className="ml-2">{selectedPacklist.length}</span>
            )}
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
        {activeTab === "products" ? (
          <SingleProduct
            toollist={toollist}
            selectedPacklist={selectedPacklist}
            setSelectedPacklist={setSelectedPacklist}
          />
        ) : (
          <CartList
            setActiveTab={setActiveTab}
            selectedPacklist={selectedPacklist}
            setSelectedPacklist={setSelectedPacklist}
          />
        )}
      </Suspense>
    </div>
  );
}
