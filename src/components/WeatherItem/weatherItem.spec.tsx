import { render, screen } from "@testing-library/react-native";
import { WeatherItem } from "@components/WeatherItem";

import sun from "@assets/sun.svg";

describe("Component: WeatherItem", () => {
  it("should be render weather item", () => {
    render(<WeatherItem title="Índice UV" icon={sun} value="6" />);

    expect(screen.getByText("Índice UV")).toBeTruthy();
  });

  it("should be render weather item with border bottom", () => {
    render(<WeatherItem title="Índice UV" icon={sun} value="6" />);

    const weatherItemWrapper = screen.getByTestId("weather-item-wrapper");

    expect(weatherItemWrapper.props.style).toHaveLength(2);
    expect(weatherItemWrapper.props.style[1]).toEqual({
      borderBottomColor: "#1C1C27",
      borderBottomWidth: 1,
    });
  });

  it("should be render weather item without border bottom", () => {
    render(<WeatherItem title="Índice UV" icon={sun} value="6" isLast />);

    const weatherItemWrapper = screen.getByTestId("weather-item-wrapper");

    expect(weatherItemWrapper.props.style).toHaveLength(2);
    expect(weatherItemWrapper.props.style[1]).toBeFalsy();
  });
});
