import React, { useState } from "react";
import PropTypes from "prop-types";
import EditableLabelMolecule from "../../molecules/EditableLabelMolecule";

EditableLabel.propTypes = {
    labelText: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    labelHead: PropTypes.string.isRequired,
};

function EditableLabel(props) {
    const [label, setLabel] = useState(props.labelText);

    const [isEdit, setIsEdit] = useState(props.labelText === "" ? true : false);

    const onLabelChange = (event) => {
        setLabel(event.target.value);
    };

    const onSave = () => {
        if (label) {
            setIsEdit(false);
            props.onSave(label);
        }
    };
    return (
        <EditableLabelMolecule
            onLabelChange={onLabelChange}
            label={props.labelText}
            saveLabel={onSave}
            editClick={() => setIsEdit(true)}
            edit={isEdit}
            labelHead={props.labelHead}
        />
    );
}

export default EditableLabel;
