import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store"; // Import your Redux store
import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Dashboard from "./Components/Dashboard.tsx";
import Home from "./pages/Home/Home.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./pages/dashboard/routes/dashboard_page/DashBoard.tsx";
import DashboardLayout from "./pages/dashboard/middleware/Outlet.tsx";
import Users from "./pages/dashboard/routes/users/Users.tsx";
import AddUser from "./pages/dashboard/routes/users/AddUser.tsx";
import Categories from "./pages/dashboard/routes/categories/Categories.tsx";
import Words from "./pages/dashboard/routes/words/Words.tsx";
import AddCategory from "./pages/dashboard/routes/categories/AddCategory.tsx";
import Texts from "./pages/dashboard/routes/texts/Texts.tsx";
import AddText from "./pages/dashboard/routes/texts/AddText.tsx";
import Videos from "./pages/dashboard/routes/vidoes/Videos.tsx";
import AddVideo from "./pages/dashboard/routes/vidoes/AddVideo.tsx";
import Stats from "./pages/dashboard/routes/stats/Stats.tsx";
import Consultation from "./pages/dashboard/routes/stats/Consultation.tsx";
import AjouterWord from "./pages/dashboard/routes/words/Addword.tsx";
import { ThemeProviderContext } from "./contexts/ThemeContext.tsx";
import Unauthorized from "./Components/Unauthorized.tsx";
import AdminProtectRoute from "./pages/dashboard/middleware/AdminProtectRoute.tsx";
// Lazily load components
const Login = lazy(() => import("./Components/Login.tsx"));
const Register = lazy(() => import("./Components/Register.tsx"));

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});
const App: React.FC = () => {
  // Fake data to test role based access
  // const isAuthenticated = true;
  // const isAdmin = true;
  return (
    <Provider store={store}>
      {/* Wrap the app with Provider and pass the Redux store */}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            {/* Suspense to handle lazy loading */}
            <Suspense fallback={<div>Loading...</div>}>
              <ThemeProviderContext>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/unauthorized" element={<Unauthorized />} />

                  {/* Protected Admin & employee Routes */}
                  <Route
                    element={
                      <DashboardLayout />
                    }
                  >
                    <Route index path="/dashboard" element={<DashBoard />} />
                    <Route
                      path="*"
                      element={
                        <AdminProtectRoute>
                          <Routes>
                            <Route path="dashboard/users" element={<Users />} />

                            <Route
                              path="dashboard/users/adduser"
                              element={<AddUser />}
                            />
                          </Routes>
                        </AdminProtectRoute>
                      }
                    />

                    <Route
                      path="dashboard/categories"
                      element={<Categories />}
                    />
                    <Route
                      path="dashboard/categories/addcategory"
                      element={<AddCategory />}
                    />
                    <Route path="dashboard/words" element={<Words />} />
                    <Route
                      path="dashboard/words/addword"
                      element={<AjouterWord />}
                    />
                    <Route path="dashboard/texts" element={<Texts />} />
                    <Route
                      path="dashboard/texts/addtext"
                      element={<AddText />}
                    />
                    <Route path="dashboard/videos" element={<Videos />} />
                    <Route
                      path="dashboard/videos/addvideo"
                      element={<AddVideo />}
                    />
                    <Route path="dashboard/stats" element={<Stats />} />
                    <Route
                      path="dashboard/stats/consultation"
                      element={<Consultation />}
                    />
                  </Route>
                </Routes>
              </ThemeProviderContext>
            </Suspense>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer />
    </Provider>
  );
};

export default App;
