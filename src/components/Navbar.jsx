import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <a className=" font-bold text-3xl  theme-text bg-clip-text text-transparent  ">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal px-1 text-[16px] font-medium">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a href="#" className="btn btn-xs btn-link">
          <FiShoppingCart className="text-2xl" />
        </a>
        <a href="#">Login</a>
        <a className="btn theme-bg rounded-full  ">Get Started</a>
      </div>
    </div>
  );
}
