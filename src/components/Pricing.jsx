import { Suspense } from "react";
import SinglePriceCard from "./SinglePriceCard";

export default function Pricing({ pricingData }) {
  return (
    <div className="container mx-auto text-center space-y-2.5 py-20">
      <h1 className="text-5xl font-bold ">Simple, Transparent Pricing</h1>
      <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      <div className="pricing-table grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
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
          <SinglePriceCard pricingData={pricingData} />
        </Suspense>
      </div>
    </div>
  );
}
