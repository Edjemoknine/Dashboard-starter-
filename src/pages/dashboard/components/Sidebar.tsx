/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { SIDENAV_ITEMS } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SideNav = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={`${
        isSidebarOpen ? "w-56" : "w-20"
      } h-screen transition-all duration-300  z-30 border-r border-zinc-200`}
    >
      <div className="flex flex-col pl-4 pr-2 w-full relative">
        <div className="h-20">
          {/* menu btn */}
          <button
            onClick={toggleSidebar}
            className="absolute -right-5 z-50 top-10 bg-white border rounded-xl p-2 duration-300 border-gray-400 text-gray-400 hover:text-gray-500"
          >
            <BiChevronLeft
              className={`${
                !isSidebarOpen ? "rotate-180" : ""
              } h-4 w-4 transform transition-transform duration-300`}
            />
          </button>
          <Link
            to="/"
            className="flex no-underline flex-row space-x-3 h-20 items-center relative justify-start  border-zinc-200 w-full"
          >
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            {isSidebarOpen && (
              <span className="font-bold text-xl hidden md:flex uppercase text-info">
                Dialekta
              </span>
            )}
          </Link>
        </div>
        <div className="sidContainer h-[70vh] overflow-y-auto overflow-x-hidden !mt-20 pr-2 duration-300 transition-all">
          <div className="flex flex-col space-y-2 ">
            {SIDENAV_ITEMS.map((item, idx) => {
              return (
                <MenuItem isSidebarOpen={isSidebarOpen} key={idx} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({
  item,
  isSidebarOpen,
}: {
  item: any;
  isSidebarOpen: boolean;
}) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  useEffect(() => {
    setSubMenuOpen(false);
  }, [isSidebarOpen, setSubMenuOpen]);

  const Icon = item.icon;

  return (
    <div className="font-normal text-sm">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center mb-2 p-2 group relative rounded-lg hover:bg-gray-200 ${
              isSidebarOpen ? "w-full" : "w-fit"
            } justify-between ${
              pathname.includes(item.path)
                ? "bg-info text-white"
                : "text-gray-600 "
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              <Icon className="h-5 w-5" />
              {isSidebarOpen ? (
                <span className="flex">{item.title}</span>
              ) : null}
            </div>
            {!isSidebarOpen && (
              <span
                className="text-xs absolute left-full px-2 py-1 z-20 rounded-md ml-8 bg-sky-100 text-info
             -translate-x-3 group-hover:translate-x-0 transition-all opacity-5 duration-300 group-hover:opacity-100 hidden group-hover:block
             "
              >
                {item.title}
              </span>
            )}

            {isSidebarOpen && (
              <div className={`${subMenuOpen ? "rotate-180" : ""} flex duration-300 transition-transform`}>
                <BiChevronDown width="24" height="24" />
              </div>
            )}
          </button>

          {subMenuOpen && (
            <div className="mb-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem: any, idx: number) => {
                console.log({ pathname });
                console.log("subItem.path", subItem.path);
                return (
                  <Link
                    key={idx}
                    to={subItem.path}
                    className={`no-underline  p-2 rounded-lg hover:bg-gray-200 ${
                      subItem.path === pathname
                        ? "text-info font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {isSidebarOpen ? <span>{subItem.title}</span> : null}
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          to={item.path}
          className={`flex flex-row items-center group no-underline mb-2 ${
            isSidebarOpen ? "w-full" : "w-fit"
          } p-2 relative rounded-lg hover-bg-zinc-100 w-fit justify-between hover:bg-gray-200 ${
            item.path === pathname ? " bg-info text-white" : "text-gray-600"
          }`}
        >
          <div className="flex flex-row space-x-4 items-center">
            <Icon className="h-5 w-5" />
            {isSidebarOpen ? <span className=" flex">{item.title}</span> : null}
          </div>

          {/* floating dot */}
          {!isSidebarOpen && (
            <span className="text-sm absolute left-full px-2 py-1 ml-6 bg-sky-100 text-blue-500 transition-all invisible -translate-x-3 opacity-20 group-hover:visible group-hover:translate-x-0">
              {item.title}
            </span>
          )}
          {!isSidebarOpen && (
            <span
              className="text-xs absolute left-full px-2 py-1 z-20 rounded-md ml-8 bg-sky-100  text-blue-500
         -translate-x-3 group-hover:translate-x-0 transition-all opacity-5 group-hover:opacity-100 hidden group-hover:block duration-300
         "
            >
              {item.title}
            </span>
          )}
        </Link>
      )}
    </div>
  );
};
