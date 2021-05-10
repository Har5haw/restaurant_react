import React from "react";
import PopUp from "../../atoms/PopUp/PopUp";
import PopupData from "../../atoms/PopUp/PopUpData";
import PropTypes from "prop-types";

const PopUpMolecule = (props) => {
    return (
        <PopUp {...props.popup}>
            <PopupData {...props.popupData} />
        </PopUp>
    );
};

PopUpMolecule.propsType = {
    popup: PropTypes.object.isRequired,
    popupData: PropTypes.object.isRequired,
};

export default PopUpMolecule;
