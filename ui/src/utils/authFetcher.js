import { Token } from "@/api";

export async function authFetcher(url, params) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
    window.location.replace("/"); // Redirect to login page
  };

  if (!token) {
    logout();
     return new Response(null, { status: 401, statusText: "Unauthorized" });
  } else {
    if (tokenCtrl.hasExpired(token)) {
      logout();
      return new Response(null, { status: 401, statusText: "Token expired" });
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        return new Response(null, { status: 500, statusText: "Fetch error" });
      }
    }
  }
}
