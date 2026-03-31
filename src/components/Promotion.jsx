export default function Promotion() {
  return (
    <div className="container mx-auto  py-20 text-center space-y-5 text-white">
      <h1 className="text-4xl font-bold">Ready to Transform Your Workflow?</h1>
      <p className="w-1/2 mx-auto font-light">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>
      <div>
        <button className="btn btn-outline rounded-full hover:scale-101 transition duration-300  bg-white text-purple-500  mr-4">
          Explore Products
        </button>
        <button className="btn btn-outline rounded-full hover:scale-103  transition duration-300 text-white  hover:text-purple-500  ">
          View Pricing
        </button>
        <ul className="flex list-disc gap-5 justify-center mt-4 text-sm">
          <li className="list-none">
            <a href="#">14-day free trial</a>
          </li>
          <li>
            <a href="#">No credit card required</a>
          </li>
          <li>
            <a href="#">Cancel anytime</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
