import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherCityServiceResponse";
import { api } from "./api";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("API: getWeatherByCityService", () => {
  it("should return a weather object", async () => {
    jest.spyOn(api, "get").mockResolvedValueOnce({
      data: mockWeatherAPIResponse,
    });

    const response = await getWeatherByCityService({
      latitude: 1234,
      longitude: 5678,
    });

    expect(response).toHaveProperty("today");
    expect(response).toHaveProperty("nextDays");
  });
});
