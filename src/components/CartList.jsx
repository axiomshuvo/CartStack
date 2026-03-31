import { FcEmptyTrash } from "react-icons/fc";

export default function CartList() {
  return (
    <div className="card card-dash bg-base-100 text-left shadow-xl shadow-gray-200">
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">Your Cart</h2>
        <div className="flex items-center gap-4 bg-purple-50 rounded-xl relative p-3 mb-2.5">
          <FcEmptyTrash className="text-5xl p-2 rounded-full shadow bg-white" />
          <div className="info">
            <h3 className="text-xl font-medium">AI Writing Pro</h3>
            <p>$29</p>
          </div>
          <button className="btn btn-link no-underline absolute right-10 to-50% btn-error btn-sm">
            Remove
          </button>
        </div>

        <div className="flex items-center gap-4 bg-purple-50 rounded-xl relative p-3 mb-2.5">
          <FcEmptyTrash className="text-5xl p-2 rounded-full shadow bg-white" />
          <div className="info">
            <h3 className="text-xl font-medium">AI Writing Pro</h3>
            <p>$29</p>
          </div>
          <button className="btn btn-link no-underline absolute right-10 to-50% btn-error btn-sm">
            Remove
          </button>
        </div>

        <div className="card-actions mt-5">
          <button className="btn theme-bg btn-block">
            Proceed To Checkout
          </button>
        </div>

        <p className="flex items-center justify-center text-gray-500 text-3xl font-bold py-20 border  border-dashed border-gray-500 rounded-lg">
          <FcEmptyTrash /> Your cart is currently empty.
        </p>
        <div className="flex justify-between mt-5">
          <span>Total:</span>
          <span>$79</span>
        </div>
      </div>
    </div>
  );
}
