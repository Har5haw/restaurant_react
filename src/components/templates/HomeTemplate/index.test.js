import { Box } from "@material-ui/core";
import { render } from "@testing-library/react";
import HomeTemplate from ".";

describe("Home template test", () => {
    it("render", () => {
        const wrapper = render(
            <HomeTemplate
                navigationBarComponent={<Box>Navigation bar</Box>}
                tableListComponent={<Box>Table List</Box>}
                itemListComponent={<Box>Item List</Box>}
            />
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.queryByText("Navigation bar")).toBeInTheDocument();
        expect(wrapper.queryByText("Table List")).toBeInTheDocument();
        expect(wrapper.queryByText("Item List")).toBeInTheDocument();
    });
});
