import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@__tests__/utils/customRender";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityApiResponse } from "@__tests__/mocks/mockCityApiResponse";

describe("Screen: Search", () => {
  it("should be show city option", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityApiResponse,
    });
    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    fireEvent(searchInput, "changeText", "Vitória");

    const option = await waitFor(() =>
      act(() => screen.findByText(/vitória/i))
    );

    expect(option).toBeTruthy();
  });
});
