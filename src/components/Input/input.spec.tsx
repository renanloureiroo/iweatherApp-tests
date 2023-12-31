import { render, screen } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should be able render without activity indicator", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("input-loading");

    expect(activityIndicator).toBeNull();
  });

  it("should be able render activity indication when isLoading prop is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.queryByTestId("input-loading");

    expect(activityIndicator).toBeTruthy();
  });
});
