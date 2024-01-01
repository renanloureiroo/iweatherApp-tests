import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useCity } from "@hooks/useCity";
import { CityProvider } from "./CityContext";

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), {
      wrapper: CityProvider,
    });

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "Vitória",
          latitude: 1234,
          longitude: 5678,
        })
      )
    );

    expect(result.current.city?.name).toBe("Vitória");
    expect(result.current.city?.id).not.toBe("vitoria_city");
  });
});
