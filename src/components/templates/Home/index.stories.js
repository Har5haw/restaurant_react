import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Home from "./index";
import baseTheme from "../../../themes/index";
import { Box } from "@material-ui/core";

export default {
    title: "Template: Home Template",
    component: Home,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Home {...args} />{" "}
    </ThemeProvider>
);

export const home = Template.bind({});
home.args = {
    navigationBarComponent: (
        <Box
            style={{
                height: "100%",
                width: "100%",
                background: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            Navigation bar
        </Box>
    ),
    tableListComponent: (
        <Box
            style={{
                height: "100%",
                width: "100%",
                background: "grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            Table List
        </Box>
    ),
    itemListComponent: (
        <Box
            style={{
                height: "100%",
                width: "100%",
                background: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            Item List
        </Box>
    ),
};
