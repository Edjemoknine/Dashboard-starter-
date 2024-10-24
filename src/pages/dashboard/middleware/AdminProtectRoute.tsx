/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const userData =
    useSelector((state: any) => state.user.userInfo) ||
    JSON.parse(localStorage.getItem("userInfo")!)?.data;
  const isAdmin = userData.is_admin;
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminProtectRoute;
