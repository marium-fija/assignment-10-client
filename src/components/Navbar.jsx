import React, { useContext } from 'react';
import logo from '../assets/Logo.png'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
const { user, logOut } = useContext(AuthContext);

     const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

    const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-gardeners"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "font-medium"
          }
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-tips"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "font-medium"
          }
        >
          Browse Tips
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/share-tip"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "font-medium"
              }
            >
              Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-tips"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "font-medium"
              }
            >
              My Tips
            </NavLink>
          </li>
        </>
      )}
    </>
  );
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex items-center gap-2'>
        <img className='w-12' src={logo} alt="" />
        <p className='font-bold text-xl'>THINK GREEN</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {!user ? (
          <NavLink to="/auth/login" className="btn  text-white bg-lime-700">
            Login 
          </NavLink>
         ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="font-medium">{user.displayName}</p>
              </li>
              <li>
                <button onClick={handleLogout} className="btn bg-yellow-900 text-white">
                  Logout
                </button>
              </li>
            </ul>
          </div>
         )}
  </div>
</div>
        </div>
    );
};

export default Navbar;