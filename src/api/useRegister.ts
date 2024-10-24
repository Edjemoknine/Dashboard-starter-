/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import axiosInstance from "../services/api";

import { authService } from "../services/auth.ts";
import { setUser } from "../store/userSlice.ts";

const useRegsiterApi = () => {
  const dispatch = useDispatch();

  const registerMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string,username:string }) => {
      const response = await axiosInstance.post('/register', credentials);


      const userInfo = response.data.user;
      const accessToken = response.data.access_token;

      console.log({userInfo, accessToken});

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
    onError: (error: any) => {
      console.error('Login failed:', error);
    },
  });

  const register = (email: string, password: string,username:string) => {
    return registerMutation.mutate({ email, password ,username});
  };

  return {
    register,
    loading: registerMutation.isPending,
    error: registerMutation.error ? 'Login failed. Please check your credentials and try again.' : null,
  };
};

export default useRegsiterApi;