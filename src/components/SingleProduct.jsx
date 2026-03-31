import { use } from "react";
import * as FcIcons from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

export default function SingleProduct({
  toollist,
  selectedPacklist,
  setSelectedPacklist,
}) {
  const productList = use(toollist);
  //         "id": 8,
  //     "name": "AI Video Enhancer",
  //     "description": "Enhance videos automatically using AI-powered upscaling and filters.",
  //     "price": 32,
  //     "period": "one-time",
  //     "tag": "new",
  //     "features": ["4K upscaling", "Noise reduction", "Color correction"],
  //     "icon": "FiVideo",
  //     "flatColorIcon": "FcFilmReel"

  const handleSinglePackSelect = (id) => {
    console.log("Selected Product ID:", id);

    if (selectedPacklist.includes(id)) {
      return;
    }
    setSelectedPacklist((prev) => [...prev, id]);
    console.log(selectedPacklist);
  };
  return (
    <>
      <div className="tool-list p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productList.map((product) => {
          let badgeClass = "";
          switch (product.tag) {
            case "new":
              badgeClass = "badge-success";
              break;
            case "popular":
              badgeClass = "bg-theme-gradient text-white";
              break;
            default:
              badgeClass = "badge-warning";
          }

          const isOnList = selectedPacklist.includes(product.id);

          return (
            <div
              key={product.id}
              className="card card-dash bg-base-100 text-left shadow-xl shadow-gray-200"
            >
              <div className="card-body relative">
                <div className={`badge ${badgeClass} absolute right-2 top-2`}>
                  {product.tag}
                </div>
                <div className="card-icon text-4xl rounded-full border border-gray-300 p-5 w-fit">
                  {(() => {
                    const FlatColorIcon = FcIcons[product.flatColorIcon];
                    return FlatColorIcon ? <FlatColorIcon /> : null;
                  })()}
                </div>
                <h2 className="card-title text-2xl font-bold">
                  {product.name}
                </h2>
                <p>{product.description}</p>
                <h4 className="text-2xl font-bold">
                  ${product.price}{" "}
                  <span className="text-base font-light">
                    /{product.period}
                  </span>{" "}
                </h4>
                <ul>
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FcCheckmark /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="card-actions mt-5">
                  <button
                    onClick={() => handleSinglePackSelect(product.id)}
                    className={`btn btn-block ${isOnList ? " btn-success rounded-full " : "theme-bg"}`}
                    disabled={isOnList}
                  >
                    {isOnList ? "Added to Cart" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
