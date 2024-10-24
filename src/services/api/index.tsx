import axios from "axios";
import { authService } from "../auth.ts";
import { config } from "../../config";

const axiosInstance = axios.create({
  baseURL: config.baseAppUrl,
  validateStatus: (status) => {
    if (status === 401) {
      // Handle unauthorized access
      // Clear user data from localStorage
      authService.resetUserInfo();
      // Redirect to the login page
      window.location.href = "/login";
      return false;
    }

    switch (status) {
      case 422:
      case 403:
      case 404:
      case 500:
      case 503:
      case 504:
        // Redirect to the appropriate error page
        // window.location.href = `/error/${status}`;
        break;
      default:
        break;
    }

    return status >= 200 && status < 300;
  },
  timeout: 0,
});

// Function to add the authorization header with the token
const addAuthorizationHeader = () => {
  const token = localStorage.getItem("access_token");
  // console.log(token);
  // console.log(authService.userInfo);
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // If the token is not present, remove the Authorization header from the defaults
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// Call the function to add the Authorization header initially
addAuthorizationHeader();

export default axiosInstance;
