import SavedLabel from ".";
import { ThemeProvider } from "@material-ui/styles";

export default {
    title: "Atoms/Label",
    component: SavedLabel,
    argTypes: {
        onEditClick: { action: "edit clicked" },
    },
};

const Template = (args) => (
    <ThemeProvider>
        <SavedLabel {...args} />
    </ThemeProvider>
);

export const savedLabel = Template.bind({});
savedLabel.args = {
    label: "Shaw",
    labelHead: "Customer Name:  ",
};
