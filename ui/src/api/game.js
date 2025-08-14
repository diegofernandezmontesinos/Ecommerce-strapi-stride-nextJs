import { ENV } from "@/utils";

export class Game {
  async queLastPublished() {
    try {
      const sort="sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate= "populate=*";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (result.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
