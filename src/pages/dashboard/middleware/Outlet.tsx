/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../components/Sidebar";
import Header from "../components/Header";
import { useTheme } from "../../../contexts/ThemeContext";
// import { UserInfoFromRedux } from "../../../store/hooks/userInfoFromRedux";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const userData =
    useSelector((state: any) => state.user.userInfo) ||
    JSON.parse(localStorage.getItem("userInfo")!)?.data;
  const isAuthenticated = !!userData;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  // if (!isAdmin) {
  //   // Redirect to unauthorized page if not an admin
  //   return <Navigate to="/unauthorized" />;
  // }

  return (
    <>
      <div className="flex flex-grow flex-shrink ">
        <div className=" h-screen transition-all duration-300 sticky top-0 z-30 ">
          <SideNav
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>

        <div className="flex-1 relative flex flex-col border-r border-zinc-700 w-full bg-blue-40">
          <Header />
          <main
            className={`flex flex-col space-y-2 bg-zinc-10 flex-1 py-10  w-full min-h-screen h-full duration-300 transition-all ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-[#F3F4F7]"
            }`}
          >
            <div className="container px-4">
              <Outlet /> {/* This will render the child routes */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
