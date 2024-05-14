import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  const handleLogOut = () => {
    logOut();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-black">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/needVolunteer" className="text-black">
        Need Volunteer post
        </Link>
      </li>
      <li>
        <Link to="/needVolunteerPerson" className="text-black">
        Need Volunteer
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-yellow-200">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            )}
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
              {user ? (
                <div className="flex items-center">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar lg:mr-5 mr-1 tooltip tooltip-left "
                      data-tip={user.displayName}
                      onClick={toggleDropdown}
                    >
                      <div className="rounded-full">
                        <img alt={user.displayName} src={user.photoURL} />
                      </div>
                    </div>
                    {isOpen && (
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-36 ">
                        <li>
                          <Link to="/addVolunteer">Add Volunteer Post</Link>
                        </li>
                        <li>
                          <Link to="/manageMy"> Manage My Post</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <button onClick={handleLogOut} className="btn btn-outline btn-accent mr-5">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 lg:gap-2">
                  <Link to="/register">
                    <p className="btn btn-error">Register</p>
                  </Link>
                  <Link to="/login">
                    <p className="btn btn-outline btn-error">Login</p>
                  </Link>
                </div>
              )}
            </div>
      </div>
    </div>
  );
};

export default Navbar;
