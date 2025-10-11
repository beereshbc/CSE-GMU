// utils/serpapiService.js
import axios from "axios";
import SERPAPI_CONFIG from "../config/serpapi";

class SerpApiService {
  constructor() {
    this.config = SERPAPI_CONFIG;
  }

  async search(params = {}) {
    try {
      const searchParams = {
        ...this.config.default_params,
        ...params,
        api_key: this.config.api_key,
      };

      // Remove undefined parameters
      Object.keys(searchParams).forEach((key) => {
        if (searchParams[key] === undefined || searchParams[key] === "") {
          delete searchParams[key];
        }
      });

      const response = await axios.get(this.config.base_url, {
        params: searchParams,
      });

      return response.data;
    } catch (error) {
      console.error("SerpApi Service Error:", error);
      throw new Error("Failed to fetch data from Google Scholar API");
    }
  }

  // Helper methods for different search types
  async searchByQuery(query, additionalParams = {}) {
    return this.search({ q: query, ...additionalParams });
  }

  async searchByCitation(citesId, additionalParams = {}) {
    return this.search({ cites: citesId, ...additionalParams });
  }

  async searchByCluster(clusterId, additionalParams = {}) {
    return this.search({ cluster: clusterId, ...additionalParams });
  }

  async searchWithDateRange(query, startYear, endYear, additionalParams = {}) {
    return this.search({
      q: query,
      as_ylo: startYear,
      as_yhi: endYear,
      ...additionalParams,
    });
  }
}

export default new SerpApiService();
