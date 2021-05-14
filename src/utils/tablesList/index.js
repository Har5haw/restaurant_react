import { changeData, closePopup } from "../../features/popupData/index";
import store from "../../app/store";
import { addServingsToWaiterList } from "../../features/waiterServingsList";

import {
    addItemToTable,
    changeServings,
    deleteItem,
    editCustomerName,
    clearTable,
} from "../../features/tableList/index";

const popupData = () => store.getState().popupData;

const waiterData = () => store.getState().waiterServingsList;

const tableData = () => store.getState().tableList;

const itemsData = () => store.getState().itemsList;

const noOfServings = () => store.getState().waiterServingsList.noOfServings;

export const onTableClick = (index) => {
    if (!waiterData().name) {
        alert("You need to login first");
        return;
    }
    store.dispatch(
        changeData({
            tableIndex: index,
        })
    );
};

export const onDelete = (itemIndex) => {
    store.dispatch(
        deleteItem({
            itemIndex: itemIndex,
            tableIndex: popupData().tableIndex,
        })
    );
};

export const onServingsChange = (event, itemIndex) => {
    store.dispatch(
        changeServings({
            servings: event.target.value,
            itemIndex: itemIndex,
            tableIndex: popupData().tableIndex,
        })
    );
};

export const drop = (event, index) => {
    event.preventDefault();
    if (!waiterData().name) {
        alert("You need to login first");
        return;
    }
    if (!tableData()[index].tableName) {
        alert(
            "Click on table and reserve the table by providing the customer name"
        );
        return;
    }
    store.dispatch(
        addItemToTable({
            index: index,
            itemData: itemsData().filter(
                (ele) =>
                    ele.id === parseInt(event.dataTransfer.getData("itemId"))
            )[0],
        })
    );
};

export const onClosePopUp = () => {
    store.dispatch(closePopup());
};

export const closeServings = () => {
    store.dispatch(
        addServingsToWaiterList({
            ...tableData()[popupData().tableIndex],
            id: noOfServings(),
            tableId: popupData().tableIndex,
        })
    );
    store.dispatch(clearTable(popupData().tableIndex));
    onClosePopUp();
};

export const onCustomerNameSave = (customerName) => {
    store.dispatch(
        editCustomerName({
            tableId: popupData().tableIndex,
            customerName: customerName,
        })
    );
};
