import { ENV, authFetcher } from "@/utils";
import { method, result } from "lodash";

export class Address {
  async create(data, userId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data
        }),
      };
      const response = await authFetcher(url, params);
      const result = await response.json();
      if (![200, 201].includes(response.status)) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
