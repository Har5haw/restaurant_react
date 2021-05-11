import { render, screen } from "@testing-library/react";
import NavigationBar from ".";

describe("Navigation Bar", () => {
    it("render navigation bar", () => {
        const wrapper = render(<NavigationBar />);
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("ZeMoSo Restaurant")).toBeInTheDocument();
    });
});
