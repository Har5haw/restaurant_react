import React from "react";
import ItemName from "./index";
import baseTheme from "../../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Atoms/Item Name",
    component: ItemName,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <ItemName {...args} />
    </ThemeProvider>
);

export const itemName = Template.bind({});
itemName.args = {
    itemName: "Dosa",
    itemPrice: 20.0,
};
