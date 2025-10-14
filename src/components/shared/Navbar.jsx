import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { cart } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);

  // 🔹 Reusable class generator for nav links
  const navLinkClass = (to) =>
    `px-3 py-2 rounded-md transition-colors duration-200 ${
      path === to
        ? "bg-purple-600 text-white font-semibold" // Active
        : "text-gray-200 hover:bg-purple-400 hover:text-white" // Hover
    }`;

  return (
    <div className="h-[70px] bg-custom-gradient text-white z-50 flex items-center sticky top-0">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold">
          <FaStore className="mr-2 text-3xl" />
          <span className="font-[Poppins]">E-Shop</span>
        </Link>

        {/* Nav Links */}
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-100 sm:h-fit sm:bg-none bg-custom-gradient text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0}`}
        >
          <li>
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={navLinkClass("/products")}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className={navLinkClass("/cart")}>
              <Badge
                showZero
                badgeContent={cart?.length || 0}
                color="primary"
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <FaShoppingCart size={25} />
              </Badge>
            </Link>
          </li>

          {/* User / Login */}
          {user && user.id ? (
            <li>
              <UserMenu />
            </li>
          ) : (
            <li>
              <Link
                className="flex items-center space-x-2 px-4 py-[6px]
                  bg-gradient-to-r from-purple-600 to-red-500
                  text-white font-semibold rounded-md shadow-lg
                  hover:from-purple-500 hover:to-red-400 transition
                  duration-300 ease-in-out transform"
                to="/login"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
