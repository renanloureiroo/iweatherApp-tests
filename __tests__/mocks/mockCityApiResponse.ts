import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityApiResponse: CityAPIResponse = {
  id: "1",
  name: "Vitória",
  sys: {
    country: "BR",
  },
  coord: {
    lon: 1234,
    lat: 5678,
  },
};
