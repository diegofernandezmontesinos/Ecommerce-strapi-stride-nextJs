import { createContext, useEffect, useState } from "react";
import { Token, User } from "@/api";

export const AuthContext = createContext();
const tokenCtrl = new Token();
const userCtrl = new User();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }
      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };

  const logout = () => {
    console.log("Logging out...");
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
  };

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
