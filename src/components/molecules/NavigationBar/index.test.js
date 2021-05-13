import { fireEvent, render, screen } from "@testing-library/react";
import NavigationBar from ".";

describe("Navigation Bar", () => {
    it("render navigation bar", () => {
        const mockFun = jest.fn();
        const wrapper = render(
            <NavigationBar user={{ name: false }} login={mockFun} />
        );
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("ZeMoSo Restaurant")).toBeInTheDocument();

        fireEvent.click(wrapper.queryByText("Login"));
        expect(mockFun).toBeCalled();
    });
});
