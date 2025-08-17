import { ENV } from "@/utils";
import { inRange } from "lodash";

export class Game {
  async getLastPublished() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error al obtener el juego");
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, platformId = null }) {
    try {
      const filterPlatform =
        platformId && `filters[platform][id][$eq]=${platformId}`;
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishdAt:desc`;
      const populate = `populate=*`;

      const urlParams = `${sort}&${paginationLimit}&${filterPlatform}&${populate}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error al obtener el juego");
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}
