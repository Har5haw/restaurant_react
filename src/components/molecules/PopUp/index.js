import React from 'react';
import PopUp from '../../atoms/PopUp/PopUp';
import PopupData from '../../atoms/PopUp/PopUpData';

const PopUpMolecule = (props) => {
    return (
        <PopUp open={props.open} close={props.close} tableName={props.tableName} totalPrice={props.totalPrice}>
            <PopupData items={props.items} onServingsChange={props.onServingsChange}> 

            </PopupData>
        </PopUp>
    );
}

export default PopUpMolecule;