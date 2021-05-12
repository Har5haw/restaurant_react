import React from "react";
import PopUp from "../../atoms/PopUp/PopUp";
import PopupData from "../../atoms/PopUp/PopUpData";
import PropTypes from "prop-types";

import EditableLabel from "../EditableLabel";

const PopUpMolecule = (props) => {
    return (
        <PopUp {...props.popup}>
            <EditableLabel
                labelText={props.customerName}
                onSave={props.onSave}
                labelHead={"Customer Name"}
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
