import { ThemeProvider } from "@material-ui/styles";
import UserDetails from ".";

export default {
    title: "Atoms/User Details",
    component: UserDetails,
    argTypes: { logout: { action: "Logout" } },
};

const Template = (args) => (
    <ThemeProvider>
        <UserDetails {...args} />
    </ThemeProvider>
);

export const userDetails = Template.bind({});
userDetails.args = {
    user: {
        name: "Shaw",
        email: "shaw@gmail.com",
    },
    isAuthenticated: true,
};
