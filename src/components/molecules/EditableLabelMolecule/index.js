import React from "react";
import PropTypes from "prop-types";
import EditLabel from "../../atoms/EditableLabelAtoms/EditLabel";
import SavedLabel from "../../atoms/EditableLabelAtoms/SavedLabel";

EditableLabelMolecule.propTypes = {
    onLabelChange: PropTypes.func.isRequired,
    saveLabel: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    editClick: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
    labelHead: PropTypes.string.isRequired,
};

function EditableLabelMolecule(props) {
    return props.edit ? (
        <EditLabel
            onLabelChange={props.onLabelChange}
            saveLabel={props.saveLabel}
            label={props.label}
            labelHead={props.labelHead}
        />
    ) : (
        <SavedLabel
            label={props.label}
            onEditClick={props.editClick}
            labelHead={props.labelHead}
        />
    );
}

export default EditableLabelMolecule;
