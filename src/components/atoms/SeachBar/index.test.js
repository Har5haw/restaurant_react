import { fireEvent, render } from "@testing-library/react";
import SearchBar from ".";

describe("Navigation Bar", () => {
    it("render navigation bar", () => {
        const mockFun = jest.fn();

        const wrapper = render(
            <SearchBar onChange={mockFun} placeholder={"searchbar"} />
        );
        expect(wrapper).toBeDefined;

        fireEvent.change(wrapper.getByPlaceholderText("searchbar"), {
            target: { value: "2" },
        });
        expect(mockFun).toBeCalled();
    });
});
