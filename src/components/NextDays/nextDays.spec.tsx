import { screen, render } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";
import { DayProps } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  let days: DayProps[];
  beforeAll(() => {
    days = [
      {
        day: "31/07",
        max: "34˚C",
        min: "30˚C",
        weather: "Céu limpo",
        icon: clearDay,
      },
      {
        day: "01/08",
        max: "34˚C",
        min: "30˚C",
        weather: "Céu limpo",
        icon: clearDay,
      },
      {
        day: "02/08",
        max: "34˚C",
        min: "30˚C",
        weather: "Céu limpo",
        icon: clearDay,
      },
      {
        day: "03/08",
        max: "34˚C",
        min: "30˚C",
        weather: "Céu limpo",
        icon: clearDay,
      },
      {
        day: "04/08",
        max: "34˚C",
        min: "30˚C",
        weather: "Céu limpo",
        icon: clearDay,
      },
    ];
  });
  it("should render days", () => {
    render(<NextDays data={days} />);

    expect(screen.getByText("31/07")).toBeTruthy();
    expect(screen.getByText("01/08")).toBeTruthy();
    expect(screen.getByText("02/08")).toBeTruthy();
    expect(screen.getByText("03/08")).toBeTruthy();
    expect(screen.getByText("04/08")).toBeTruthy();
    expect(screen.queryByText("05/08")).toBeNull();
  });
});
