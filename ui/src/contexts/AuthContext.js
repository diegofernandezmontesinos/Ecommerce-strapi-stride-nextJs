import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (token) => {
    try {
      setToken(token);
      setLoading(false);
      setUser({email: "diegoFM@test.com"})
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };
  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
