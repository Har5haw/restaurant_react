import EditableLabelMolecule from ".";
import { ThemeProvider } from "@material-ui/styles";

export default {
    title: "Molecules/Editable Label Molecule",
    component: EditableLabelMolecule,
    argTypes: {
        onLabelChange: { action: "on label change" },
        saveLabel: { action: "saveLabel" },
        editClick: { actionn: "editClick" },
    },
};

const Template = (args) => (
    <ThemeProvider>
        <EditableLabelMolecule {...args} />
    </ThemeProvider>
);

export const editableLabelMolecule = Template.bind({});
editableLabelMolecule.args = {
    label: "Harsha",
    edit: true,
    labelHead: "Customer Name: ",
};
