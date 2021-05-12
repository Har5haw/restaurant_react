import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Provider } from "react-redux";
import ProfilePage from ".";
import baseTheme from "../../../themes/index";
import { store } from "../../../app/store";

export default {
    title: "Pages/Profile Page",
    component: ProfilePage,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
            <ProfilePage {...args} />
        </Provider>
    </ThemeProvider>
);

export const profilePage = Template.bind({});
