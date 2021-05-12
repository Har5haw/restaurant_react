import { ThemeProvider } from "@material-ui/styles";
import ProfileComponent from ".";
import baseTheme from "../../../themes/index";

export default {
    title: "Organisms/Profile",
    component: ProfileComponent,
};

const Template = (args) => (
    <ThemeProvider theme={baseTheme}>
        <ProfileComponent {...args} />
    </ThemeProvider>
);

export const profile = Template.bind({});
profile.args = {};
