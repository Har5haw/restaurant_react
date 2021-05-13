import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TableComp from "../../molecules/Table";
import SearchBar from "../../atoms/SeachBar/index";
import PopUpMolecule from "../PopUp";
import {
    addItemToTable,
    changeServings,
    deleteItem,
    editCustomerName,
    clearTable,
} from "../../../features/tableList/index";
import { useDispatch, useSelector } from "react-redux";
import { changeData, closePopup } from "../../../features/popupData/index";
import { addServingsToWaiterList } from "../../../features/waiterServingsList";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.type === "dark" ? "grey" : "lightblue",
        [theme.breakpoints.down("sm")]: {
            height: "calc(30vw + 60px)",
        },
    },
    input: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(51, 63, 62)",
    },
    inputField: {
        width: "25vw",
        margin: "20px 0px",
        marginTop: "0px",
        height: "40px",
        background: theme.palette.type === "dark" ? "transparent" : "white",
        [theme.breakpoints.down("sm")]: {
            width: "90vw",
        },
    },
    list: {
        height: "calc(90vh - 60px)",
        overflowY: "auto",
        overflowX: "hidden",
        [theme.breakpoints.down("sm")]: {
            transform: "rotate(-90deg) translateY(-30vw)",
            transformOrigin: "right top",
            width: "30vw",
            height: "100vw",
        },
    },
}));

const TablesList = (props) => {
    const [searchBarText, setSearchBarText] = useState("");

    const itemsData = useSelector((state) => state.itemsList);

    const popupData = useSelector((state) => state.popupData);

    const noOfServings = useSelector(
        (state) => state.waiterServingsList.noOfServings
    );

    const dispatch = useDispatch();

    const style = useStyles();

    let timer;

    const handleKeyUp = (event) => {
        clearTimeout(timer);
        timer = setTimeout(
            doneTypingTableSearchBar.bind(null, event.target.value),
            400
        );
    };

    const doneTypingTableSearchBar = (searchText) => {
        setSearchBarText(searchText);
    };

    const clickTable = (index) => {
        if (!props.waiterData.name) {
            alert("You need to login first");
            return;
        }
        dispatch(
            changeData({
                tableIndex: index,
            })
        );
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const drop = (event, index) => {
        event.preventDefault();
        if (!props.waiterData.name) {
            alert("You need to login first");
            return;
        }
        if (!props.tableData[index].tableName) {
            alert(
                "Click on table and reserve the table by providing the customer name"
            );
            return;
        }
        dispatch(
            addItemToTable({
                index: index,
                itemData: itemsData.filter(
                    (ele) =>
                        ele.id ===
                        parseInt(event.dataTransfer.getData("itemId"))
                )[0],
            })
        );
    };

    const onServingsChange = (event, itemIndex) => {
        dispatch(
            changeServings({
                servings: event.target.value,
                itemIndex: itemIndex,
                tableIndex: popupData.tableIndex,
            })
        );
    };

    const onDelete = (itemIndex) => {
        dispatch(
            deleteItem({
                itemIndex: itemIndex,
                tableIndex: popupData.tableIndex,
            })
        );
    };

    const closeServings = () => {
        dispatch(
            addServingsToWaiterList({
                ...props.tableData[popupData.tableIndex],
                id: noOfServings,
                tableId: popupData.tableIndex,
            })
        );
        dispatch(clearTable(popupData.tableIndex));
        onClosePopUp();
    };

    const onCustomerNameSave = (customerName) => {
        dispatch(
            editCustomerName({
                tableId: popupData.tableIndex,
                customerName: customerName,
            })
        );
        if (props.tableData[popupData.tableIndex].tableName !== customerName) {
            onClosePopUp();
        }
    };

    const onClosePopUp = () => {
        dispatch(closePopup());
    };

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Table Name"
                    onChange={handleKeyUp}
                    className={style.inputField}
                    inputProps={{ "data-testid": "search-tables" }}
                />
            </Box>
            {popupData.isOpen ? (
                <PopUpMolecule
                    popup={{
                        open: popupData.isOpen,

                        close: onClosePopUp,

                        closeServings: closeServings,

                        id: props.editablePopup
                            ? props.tableData[popupData.tableIndex].id
                            : props.tableData[popupData.tableIndex].tableId,

                        totalPrice:
                            props.tableData[popupData.tableIndex].totalPrice,

                        user: props.waiterData.name,

                        showCloseServings:
                            props.tableData[popupData.tableIndex].items
                                .length &&
                            props.tableData[popupData.tableIndex].tableName,

                        editable: props.editablePopup,
                    }}
                    popupData={{
                        items: props.tableData[popupData.tableIndex].items,
                        onServingsChange: onServingsChange,
                        onDelete: onDelete,
                        editable: props.editablePopup,
                    }}
                    customerName={
                        props.tableData[popupData.tableIndex].tableName
                    }
                    onSave={onCustomerNameSave}
                />
            ) : (
                <Box />
            )}

            <Box className={style.list}>
                {(
                    props.tableData.filter((table) =>
                        table.tableName
                            .toLowerCase()
                            .includes(searchBarText.toLowerCase())
                    ) || props.tableData
                ).map((element) => (
                    <TableComp
                        key={"table-" + element.id}
                        onDragOver={allowDrop}
                        onDrop={(event) => drop(event, element.id)}
                        onClick={() => clickTable(element.id)}
                        data={{ ...element, isServings: !props.editablePopup }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TablesList;
