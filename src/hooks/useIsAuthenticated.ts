import { authService } from "../services/auth";

export function useAuthenticated(): boolean {
    return authService.isAuthenticated();
  }
  