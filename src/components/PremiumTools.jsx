export default function PremiumTools() {
  return (
    <div className="container mx-auto py-12 text-center space-y-5">
      <h1>Premttttium Digital Tools</h1>
      <p>
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="tab">
        <button className="btn bg-theme-gradient" type="button">
          Products
        </button>
        <button className="btn " type="button">
          Cart
        </button>
      </div>
      <div className="tool-list">
        <div className="card card-dash bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
