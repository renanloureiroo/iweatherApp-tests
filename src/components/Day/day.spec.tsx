import { Day } from "@components/Day";
import { render, screen } from "@testing-library/react-native";
import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: "31/07",
          max: "34˚C",
          min: "30˚C",
          weather: "Céu limpo",
          icon: clearDay,
        }}
      />
    );

    expect(screen.getByText("31/07")).toBeTruthy();
    expect(screen.getByText("34˚C")).toBeTruthy();
    expect(screen.getByText("30˚C")).toBeTruthy();
  });
});
