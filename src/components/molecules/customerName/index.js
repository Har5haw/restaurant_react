import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import EditCustomerName from "../../atoms/PopUp/CustomerName/EditCustomerName";
import SavedCustomerName from "../../atoms/PopUp/CustomerName/SavedCustomerName";

CustomerNameMolecule.propTypes = {
    onCustomerNameChange: PropTypes.func.isRequired,
    saveCustomerName: PropTypes.func.isRequired,
    customerName: PropTypes.string.isRequired,
    editClick: PropTypes.func.isRequired,
    edit: PropTypes.bool.isRequired,
};

function CustomerNameMolecule(props) {
    return props.edit ? (
        <EditCustomerName
            onCustomerNameChange={props.onCustomerNameChange}
            saveCustomerName={props.saveCustomerName}
            customerName={props.customerName}
        />
    ) : (
        <SavedCustomerName
            customerName={props.customerName}
            onEditClick={props.editClick}
        />
    );
}

export default CustomerNameMolecule;
