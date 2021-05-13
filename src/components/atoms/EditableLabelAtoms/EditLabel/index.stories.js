import { ThemeProvider } from "@material-ui/styles";
import EditLabel from ".";

export default {
    title: "Atoms/Label",
    component: EditLabel,
    argTypes: {
        onLabelChange: { action: "Label change" },
        saveLabel: { action: "Save the label" },
    },
};

const Template = (args) => (
    <ThemeProvider>
        <EditLabel {...args} />
    </ThemeProvider>
);

export const editLabel = Template.bind({});
editLabel.args = {
    label: "Shaw",
    labelHead: "Customer Name",
};
