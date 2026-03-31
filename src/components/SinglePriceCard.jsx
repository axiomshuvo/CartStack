import { use } from "react";
import { FcCheckmark } from "react-icons/fc";

export default function SinglePriceCard({ pricingData }) {
  const allPlan = use(pricingData);

  return allPlan.map((plan) => (
    <div
      key={plan.id}
      className={` skeleton rounded-2xl text-left shadow-xl shadow-gray-100 p-5 space-y-4 relative flex flex-col h-full ${plan.tag === "most popular" ? " bg-theme-gradient text-white" : "bg-gray-100"}`}
    >
      <h2 className="text-3xl font-bold capitalize">{plan.packageName}</h2>
      <p>{plan.slogan}</p>
      <p className="text-2xl font-bold">
        ${plan.price} <span className="text-lg font-normal">/month</span>
      </p>
      <ul className=" space-y-1 flex flex-col flex-1">
        {plan.features.map((feature, index) => (
          <li className="flex gap-2 items-center" key={index}>
            <FcCheckmark /> {feature}
          </li>
        ))}
      </ul>
      <button
        className={`btn btn-block m-0 rounded-full hover:scale-101 transition duration-300  ${plan.tag === "most popular" ? "bg-white" : "theme-bg text-white"} `}
      >
        {plan.button}
      </button>
      {plan.tag && (
        <div class=" absolute -top-2 left-1/2 transform -translate-x-1/2 badge  badge-warning">
          {plan.tag}
        </div>
      )}
    </div>
  ));
}
