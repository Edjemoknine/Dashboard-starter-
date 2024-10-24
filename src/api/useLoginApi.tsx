import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import axiosInstance from "../services/api";

import { authService } from "../services/auth.ts";
import { setUser } from "../store/userSlice.ts";

const useLoginApi = () => {
  const dispatch = useDispatch();

  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await axiosInstance.post("/login", { email, password });

      const userInfo = response.data.user;
      const accessToken = response.data.token;
      console.log({ userInfo, accessToken });

      dispatch(
        setUser({
          userInfo,
          accessToken,
        })
      );

      authService.saveUserInfo({
        data: userInfo,
        access_token: accessToken,
      });

      return response.data;
    },
    onError: (error: unknown) => {
      console.error("Login failed:", error);
    },
  });

  const login = (email: string, password: string) => {
    return loginMutation.mutateAsync({ email, password });
  };

  return {
    login,
    loading: loginMutation.isPending,
    error: loginMutation.error
      ? "Login failed. Please check your credentials and try again."
      : null,
  };
};

export default useLoginApi;
