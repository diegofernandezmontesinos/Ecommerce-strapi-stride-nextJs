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
          data: {
            ...data,
            users: userId,
          },
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

  async getAll(userId) {
    try {
      const filters = `filters[users][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;

      const response = await authFetcher(url);
      const result = await response.json();
      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(data, addressId) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
      const bodyData = { data: data };
      const params = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      };

      const response = await authFetcher(url, params);
      const result = await response.json();

      if (![200, 201].includes(response.status)) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete(addressId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
    const params = { method: "DELETE" };

    const response = await authFetcher(url, params);

    // Si es 204, el borrado fue exitoso pero no hay contenido
    if (response.status === 204) {
      return true;
    }

    const result = await response.json();
    if (![200, 201].includes(response.status)) throw result;

    return result;
  } catch (error) {
    throw error;
  }
}

}
