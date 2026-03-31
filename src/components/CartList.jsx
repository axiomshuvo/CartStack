import * as FcIcons from "react-icons/fc";

export default function CartList({ selectedPacklist, setSelectedPacklist }) {
  const deleteFromCart = (id) => {
    setSelectedPacklist((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = selectedPacklist.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  const proceedAll = () => {
    setSelectedPacklist([]);
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
                className="flex items-center gap-4 bg-purple-50 rounded-xl relative p-3 mb-2.5"
              >
                <div className="text-5xl p-2 rounded-full shadow bg-white">
                  {(() => {
                    const FlatColorIcon = FcIcons[product.flatColorIcon];
                    return FlatColorIcon ? <FlatColorIcon /> : null;
                  })()}
                </div>
                <div className="info">
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p>${product.price}</p>
                </div>
                <button
                  onClick={() => deleteFromCart(product.id)}
                  className="btn btn-link no-underline absolute right-10 btn-error btn-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="card-actions mt-5">
              <button
                onClick={() => proceedAll()}
                className="btn theme-bg btn-block"
              >
                Proceed To Checkout
              </button>
            </div>
            <div className="flex justify-between mt-5">
              <span>Total:</span>
              <span>${totalPrice}</span>
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
