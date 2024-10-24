/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';



export const UserInfoFromRedux = () => {
  // Access the LoggedUserInfo object from the Redux store
  const userInfo: any = useSelector((state: any) => state.user.userInfo) || localStorage.getItem('userInfo');

  return userInfo;
};
