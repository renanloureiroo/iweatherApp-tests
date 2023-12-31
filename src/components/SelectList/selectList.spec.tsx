import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const onPressMock = jest.fn();
    const data = [
      { id: "1", name: "Vitória", latitude: 1234, longitude: 5678 },
      { id: "2", name: "Vila Velha", latitude: 4321, longitude: 8765 },
    ];

    render(
      <SelectList data={data} onChange={() => {}} onPress={onPressMock} />
    );

    const selectedCity = screen.getByText(data[0].name);

    fireEvent(selectedCity, "press");

    expect(onPressMock).toHaveBeenCalledWith(data[0]);
  });

  it("not should be show options data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    const selectedItems = screen.queryAllByTestId("select-item");

    expect(selectedItems).toHaveLength(0);
    expect(options.children).toHaveLength(0);
  });
});
