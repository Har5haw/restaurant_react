import React from "react";
import TableList from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Organisms : Table List",
    component: TableList,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <TableList {...args} />
    </ThemeProvider>
);

export const tableList = Template.bind({});

tableList.args = {
    list: require("../../../data/tables.json"),
};
