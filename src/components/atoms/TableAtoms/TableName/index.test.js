import { render, screen } from "@testing-library/react";
import TableName from ".";

describe("Table Name", () => {
    it("render Table Name", () => {
        const wrapper = render(
            <TableName tableName={"Shaw"} totalItems={2} totalPrice={100} />
        );
        expect(wrapper).toBeDefined;
        expect(screen.queryByText("Shaw")).toBeInTheDocument();
        expect(screen.queryByText("2")).toBeInTheDocument();
        expect(screen.queryByText("100 /-")).toBeInTheDocument();
    });
});
