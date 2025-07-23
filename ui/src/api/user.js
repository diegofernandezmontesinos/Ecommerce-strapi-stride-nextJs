import { ENV } from "@/utils";
import { authFetcher } from "@/utils/authFetcher";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
      const response = await authFetcher(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
}
