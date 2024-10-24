import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BellIcon, UserIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { authService } from "../services/auth.ts";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let hoverTimer: ReturnType<typeof setTimeout>;
    if (isHovering && !isNavBarVisible) {
      hoverTimer = setTimeout(() => setIsNavBarVisible(true), 300);
    }
    return () => clearTimeout(hoverTimer);
  }, [isHovering, isNavBarVisible]);

  const handleLogout = () => {
    authService.resetUserInfo();
    // Redirect to login page or handle logout logic
  };

  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible);
  };

  return (
    <>
      {isNavBarVisible ? (
        <nav
          className={`fixed top-0 right-0 h-full w-[44.8px] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex flex-col items-center p-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Welcome!</h2>
            </div>
            <div className="relative mb-4">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              >
                <BellIcon className="h-5 w-5" />
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-10">
                  <h6 className="px-3 py-1 text-xs font-medium border-b border-gray-200 dark:border-gray-700">New Tasks</h6>
                  <ul className="py-1">
                    <li className="px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-300">New word task</li>
                    <li className="px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-300">New text task</li>
                    <li className="px-3 py-1 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-300">New video task</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              >
                <UserIcon className="h-5 w-5" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-10">
                  <a href="/profile" className="block px-3 py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">Profile</a>
                  <hr className="my-1 border-gray-200 dark:border-gray-700" />
                  <button onClick={handleLogout} className="block w-full text-left px-3 py-1 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">Log out</button>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-1 text-xs">Night Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <button
              onClick={toggleNavBar}
              className="mt-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      ) : (
        <div
          className="fixed top-0 right-0 h-full w-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            onClick={toggleNavBar}
            className={`fixed top-4 right-4 p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;