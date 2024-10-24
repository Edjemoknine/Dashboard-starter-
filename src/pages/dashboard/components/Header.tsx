import React, { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import { authService } from "../../../services/auth.ts";
import { BellIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { CFormInput, CInputGroup, CInputGroupText } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilSearch } from "@coreui/icons";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.resetUserInfo();
    navigate("/login");

    // Redirect to login page or handle logout logic
  };
  // const toggleNotifications = () => setShowNotifications(!showNotifications);
  return (
    <header
      className={`sticky top-0 z-20 bg-white text-gray-800 border-b border-gray-200 dark:border-gray-200 `}
    >
      <div className="container px-4">
        <div className="flex bg-red-30 justify-between h-16 items-center">
          <div className="flex-shrink-0 cursor-pointer">
            {/* <span className="text-2xl font-bold text-blue-600">
              Dialekta Admin
            </span> */}
            <CInputGroup className="">
              <CInputGroupText className="!px-4 !bg-[#F3F4F7] !border-r-none">
                <CIcon icon={cilSearch} size="lg" />
              </CInputGroupText>
              <CFormInput
                className="!bg-[#F3F4F7] !border-l-0"
                type="text"
                placeholder="Search ..."
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </CInputGroup>
          </div>
          <nav className=" flex items-center justify-center mt-3">
            <ul className="flex items-center space-x-8">
              {/* Notifications */}
              <li>
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 rounded-full hover:bg-gray-100  transition duration-300"
                  >
                    <BellIcon className="h-5 w-5 text-gray-600 dark:text-gray-600" />
                  </button>
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-10">
                      <h6 className="px-3 py-1 text-xs font-medium border-b border-gray-200 dark:border-gray-700">
                        New Tasks
                      </h6>
                      <ul className="py-1">
                        <li className="px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-300">
                          New word task
                        </li>
                        <li className="px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-300">
                          New text task
                        </li>
                        <li className="px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-300">
                          New video task
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              {/* Theme Toggle */}
              <li>
                <div className="flex flex-col items-center">
                  <label
                    id="toggle-theme"
                    className=" cursor-pointer text-gray-600 dark:text-gray-600 hover:bg-gray-100 p-2 rounded-full"
                  >
                    {theme === "dark" ? (
                      <SunIcon className="h-5 w-5" />
                    ) : (
                      <MoonIcon className="h-5 w-5" />
                    )}
                    <input
                      style={{ display: "none" }}
                      id="toggle-theme"
                      type="checkbox"
                      className="hidden"
                      checked={theme === "dark"}
                      onChange={toggleTheme}
                    />
                  </label>
                </div>
              </li>
              {/* User Menu */}
              <li>
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-300 transition duration-300"
                  >
                    {/* <UserIcon className="h-5 w-5" /> */}
                    <img
                      src={
                        "https://coreui.io/demos/react/5.1/modern/assets/8-CQnrj2m9.jpg"
                      }
                      alt="user-avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-10">
                      <a
                        href="/profile"
                        className="block px-3 py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                      >
                        Profile
                      </a>
                      <hr className="my-1 border-gray-200 dark:border-gray-700" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-3 py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                      >
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
