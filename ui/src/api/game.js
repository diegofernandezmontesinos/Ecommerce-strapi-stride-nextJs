import { ENV } from "@/utils";

export class Game {
  async getLastPublished() {
    try {
      const sort="sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate= "populate=*";

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
}
