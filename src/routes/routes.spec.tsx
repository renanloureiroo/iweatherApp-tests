import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";

import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherCityServiceResponse";

describe("Routes: App Routes", () => {
  it("should be render Search Screen when not city selected", async () => {
    render(<Routes />);
    const title = await waitFor(() => screen.findByText(/escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should be render Dashboard Screen when city selected", async () => {
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Vitória",
      latitude: 1234,
      longitude: 5678,
    };
    await saveStorageCity(city);
    render(<Routes />);

    const title = await waitFor(() => act(() => screen.getByText(city.name)));

    expect(title).toBeTruthy();
  });
});
