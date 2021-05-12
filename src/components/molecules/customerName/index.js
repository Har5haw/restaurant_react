import React from "react";
import PropTypes from "prop-types";
import EditCustomerName from "../../atoms/PopUp/CustomerName/EditCustomerName";
import SavedCustomerName from "../../atoms/PopUp/CustomerName/SavedCustomerName";

CustomerNameMolecule.propTypes = {
    onCustomerNameChange: PropTypes.func.isRequired,
    saveCustomerName: PropTypes.func.isRequired,
    customerName: PropTypes.string.isRequired,
    editClick: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
    labelHead: PropTypes.string.isRequired,
};

function CustomerNameMolecule(props) {
    return props.edit ? (
        <EditCustomerName
            onCustomerNameChange={props.onCustomerNameChange}
            saveCustomerName={props.saveCustomerName}
            customerName={props.customerName}
            labelHead={props.labelHead}
        />
    ) : (
        <SavedCustomerName
            customerName={props.customerName}
            onEditClick={props.editClick}
            labelHead={props.labelHead}
        />
    );
}

export default CustomerNameMolecule;
