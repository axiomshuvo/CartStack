import * as FcIcons from "react-icons/fc";
import { toast } from "react-toastify";

export default function CartList({
  selectedPacklist,
  setSelectedPacklist,
  setActiveTab,
}) {
  const deleteFromCart = (id) => {
    setSelectedPacklist((prev) => prev.filter((item) => item.id !== id));

    if (selectedPacklist.length === 1) {
      setActiveTab("products");
      toast.error("All Product removed from cart!");
    } else {
      toast.info("Product removed from cart!");
    }
  };

  const totalPrice = selectedPacklist.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  const proceedAll = () => {
    setSelectedPacklist([]);
    setActiveTab("products");
    toast.warning("Checkout successful!");
  };
  console.log(selectedPacklist);

  return (
    <div className="card card-dash bg-base-100 text-left shadow-xl shadow-gray-200">
      <div className="card-body ">
        {selectedPacklist.length > 0 ? (
          <>
            <h2 className="card-title text-2xl font-bold">
              Your Cart {selectedPacklist.length}
            </h2>
            {selectedPacklist.map((product) => (
              <div
                key={product.id}
                className="flex skeleton  items-center gap-4 bg-purple-50 rounded-xl relative p-3 mb-2.5"
              >
                <div className="text-5xl p-2 rounded-full shadow bg-white">
                  {(() => {
                    const FlatColorIcon = FcIcons[product.flatColorIcon];
                    return FlatColorIcon ? <FlatColorIcon /> : null;
                  })()}
                </div>
                <div className="info">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="">${product.price}</p>
                </div>
                <button
                  onClick={() => deleteFromCart(product.id)}
                  className="btn font-bold btn-link no-underline absolute right-10 text-red-600 btn-md"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-5">
              <span className="text-xl">Total:</span>
              <span className="font-bold text-2xl">${totalPrice}</span>
            </div>
            <div className="card-actions mt-5">
              <button
                onClick={() => proceedAll()}
                className="btn theme-bg btn-block"
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="flex items-center justify-center text-gray-500 text-3xl font-bold py-20 border  border-dashed border-gray-500 rounded-lg">
            <FcIcons.FcEmptyTrash /> Your cart is currently empty.
          </p>
        )}
      </div>
    </div>
  );
}
