import React from "react";
import Table from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Molecules/Table Card",
    component: Table,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Table {...args} />
    </ThemeProvider>
);

export const tableCard = Template.bind({});
tableCard.args = {
    data: {
        id: 0,
        tableName: "Harsha",
        totalItems: 20,
        totalPrice: 30,
    },
};
