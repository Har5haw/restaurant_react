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
import { useAuth0 } from "@auth0/auth0-react";
import { addServingsToWaiterList } from "../../../features/waiterServingsList";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "93vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.type === "dark" ? "grey" : "lightblue",
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
    },
    list: {
        height: "calc(90vh - 60px)",
        overflowY: "auto",
    },
}));

const TablesList = (props) => {
    const [searchBarText, setSearchBarText] = useState("");

    const itemsData = useSelector((state) => state.itemsList);

    const popupData = useSelector((state) => state.popupData);

    const dispatch = useDispatch();

    const style = useStyles();

    const { user } = useAuth0();

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
            addServingsToWaiterList(props.tableData[popupData.tableIndex])
        );
        dispatch(closePopup());
        dispatch(clearTable(popupData.tableIndex));
    };

    const onCustomerNameSave = (customerName) => {
        dispatch(
            editCustomerName({
                tableId: popupData.tableIndex,
                customerName: customerName,
            })
        );
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
                        close: () => {
                            dispatch(closePopup());
                        },
                        closeServings: closeServings,
                        tableName: popupData.tableIndex,
                        totalPrice:
                            props.tableData[popupData.tableIndex].totalPrice,
                        user: user ? user.name : "Loading...",
                        showCloseServings:
                            props.tableData[popupData.tableIndex].items.length >
                            0,
                    }}
                    popupData={{
                        items: props.tableData[popupData.tableIndex].items,
                        onServingsChange: onServingsChange,
                        onDelete: onDelete,
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
                        data={element}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TablesList;
