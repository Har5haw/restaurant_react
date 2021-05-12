import React, { useState } from "react";
import PopUp from "../../atoms/PopUp/PopUp";
import PopupData from "../../atoms/PopUp/PopUpData";
import PropTypes from "prop-types";
import CustomerNameMolecule from "../../molecules/customerName";

const PopUpMolecule = (props) => {
    const [customerName, setCustomerName] = useState(props.customerName);
    const [isEdit, setIsEdit] = useState(
        props.customerName === "" ? true : false
    );

    const onCustomerNameChange = (event) => {
        setCustomerName(event.target.value);
    };

    return (
        <PopUp {...props.popup}>
            <CustomerNameMolecule
                onCustomerNameChange={onCustomerNameChange}
                customerName={props.customerName}
                saveCustomerName={() => {
                    props.onSave(customerName);
                    setIsEdit(false);
                }}
                editClick={() => setIsEdit(true)}
                edit={isEdit}
            />
            <PopupData {...props.popupData} />
        </PopUp>
    );
};

PopUpMolecule.propsType = {
    popup: PropTypes.object.isRequired,
    popupData: PropTypes.object.isRequired,
    customerName: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default PopUpMolecule;
