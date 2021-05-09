import React from "react";
import PopUp from "../../atoms/PopUp/PopUp";
import PopupData from "../../atoms/PopUp/PopUpData";

const PopUpMolecule = (props) => {
    return (
        <PopUp {...props.popup}>
            <PopupData {...props.popupData} />
        </PopUp>
    );
};

export default PopUpMolecule;
