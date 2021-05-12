import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomerNameMolecule from "../../molecules/customerName";

EditableLabel.propTypes = {
    labelText: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    labelHead: PropTypes.string.isRequired,
};

function EditableLabel(props) {
    const [customerName, setCustomerName] = useState(props.labelText);

    const [isEdit, setIsEdit] = useState(props.labelText === "" ? true : false);

    const onCustomerNameChange = (event) => {
        setCustomerName(event.target.value);
    };

    const onSave = () => {
        props.onSave(customerName);
        if (customerName) {
            setIsEdit(false);
        }
    };
    return (
        <CustomerNameMolecule
            onCustomerNameChange={onCustomerNameChange}
            customerName={props.labelText}
            saveCustomerName={onSave}
            editClick={() => setIsEdit(true)}
            edit={isEdit}
            labelHead={props.labelHead}
        />
    );
}

export default EditableLabel;
