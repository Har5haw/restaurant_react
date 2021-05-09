import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import NavigationBar from "./index";
import baseTheme from "../../../themes/index";

export default {
    title: "Atoms : Navigation bar",
    component: NavigationBar,
};

const Temlate = (args) => (
    <ThemeProvider theme={baseTheme}>
        <NavigationBar />
    </ThemeProvider>
);

export const navigationBar = Temlate.bind({});
