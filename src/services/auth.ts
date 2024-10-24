/* eslint-disable @typescript-eslint/no-explicit-any */

class AuthService {
  userInfo?: any;

  constructor() {
    this.userInfo = this.loadUserInfo();
  }

  isAuthenticated(): boolean {
    return !!this.userInfo?.data.id;
  }

  saveUserInfo(userInfo: any) {
    // todo: save user info to local storage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    // localStorage.setItem("refresh_token", userInfo.refresh_token);
    localStorage.setItem("access_token", userInfo.access_token);

    this.userInfo = this.loadUserInfo();
  }

  loadUserInfo(): any | undefined {
    const userInfo = localStorage.getItem("userInfo") as any;
    // const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");

    return {
      data: JSON.parse(userInfo) || {},
      // refresh_token: refreshToken,
      access_token: accessToken,
    };
  }

  resetUserInfo() {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");

    this.userInfo = undefined;
  }

  currentUserId() {
    return this.userInfo?.data.id;
  }
}

export const authService = new AuthService();
