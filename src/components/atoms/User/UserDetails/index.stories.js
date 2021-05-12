import { ThemeProvider } from "@material-ui/styles";
import UserDetails from ".";

export default {
    title: "Atom: User Deatils",
    component: UserDetails,
    argTypes: { logout: { action: "Logout" } },
};

const Template = (args) => (
    <ThemeProvider>
        <UserDetails {...args} />
    </ThemeProvider>
);

export const userDeatails = Template.bind({});
userDeatails.args = {
    user: {
        name: "Shaw",
        email: "shaw@gmail.com",
    },
    isAuthenticated: true,
};
