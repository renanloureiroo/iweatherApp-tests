import { cityStorage } from "@__tests__/mocks/cityStorage";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

describe("Storage: CityStorage", () => {
  it("should be return null when not have city in storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be save city in storage", async () => {
    await saveStorageCity(cityStorage);

    const response = await getStorageCity();

    expect(response).toEqual(cityStorage);
  });

  it("should be delete city with correct key", async () => {
    await saveStorageCity(cityStorage);

    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
