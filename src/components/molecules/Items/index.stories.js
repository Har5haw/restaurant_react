import React from "react";
import Item from "./index";
import baseTheme from "../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
    title: "Molecules : Item Card",
    component: Item,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        {" "}
        <Item {...args} />
    </ThemeProvider>
);

export const item = Template.bind({});
item.args = {
    image:
        "https://www.quickanddirtytips.com/sites/default/files/images/14471/dosa-compressor.jpg",
    itemName: "Dosa",
    itemPrice: 20.0,
};
