import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import NavigationBar from "./index";
import baseTheme from "../../../themes/index";

export default {
    title: "Molecules/NavigationBar",
    component: NavigationBar,
    argTypes: {
        login: { action: "Login" },
        logout: { action: "Logout" },
    },
};

const Temlate = (args) => (
    <ThemeProvider theme={baseTheme}>
        <NavigationBar {...args} />
    </ThemeProvider>
);

export const navigationBar = Temlate.bind({});
navigationBar.args = {
    user: {
        name: "Harsha",
        email: "harsha@gmail.com",
    },
};

export const navigationBarLogin = Temlate.bind({});
navigationBarLogin.args = {
    user: {
        name: null,
        email: null,
    },
};
