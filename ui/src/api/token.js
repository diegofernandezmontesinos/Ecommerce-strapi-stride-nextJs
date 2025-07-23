import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token {
  setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }

  hasExpired(token) {
    const tokenDecoded = jwtDecode(token);
    const expireDate = tokenDecoded.exp * 1000; // Convert to milliseconds
    const currentDate = new Date().getTime();

    if (currentDate > expireDate) {
      return true;
    }
    return false;
  }
}
