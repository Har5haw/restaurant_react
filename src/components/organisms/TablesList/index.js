import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TableComp from "../../molecules/Table";
import SearchBar from "../../atoms/SeachBar/index";
import PopUpMolecule from "../../molecules/PopUp";
import {
    addItemToTable,
    changeServings,
    deleteItem,
} from "../../../features/tableList/tableListSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    changeData,
    closePopup,
} from "../../../features/popupData/popupDataSlice";

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
    const tableData = useSelector((state) => state.tableList);

    const popupData = useSelector((state) => state.popupData);

    const dispatch = useDispatch();

    const style = useStyles();

    let timer;
    let search_table_text = "";

    const handleKeyUp = (event) => {
        search_table_text = event.target.value;
        clearTimeout(timer);
        timer = setTimeout(doneTypingTables, 400);
    };

    const click = (index) => {
        dispatch(
            changeData({
                tableData: { ...tableData[index] },
                tableIndex: index,
            })
        );
    };

    const doneTypingTables = () => {
        if (search_table_text.length > 0) {
            setTables(
                tables.filter((table) =>
                    table.tableName.toLowerCase().includes(search_table_text)
                )
            );
        } else {
            setTables([...props.list]);
        }
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const drop = (event, index) => {
        event.preventDefault();
        dispatch(
            addItemToTable({
                index: index,
                itemData: JSON.parse(event.dataTransfer.getData("itemData")),
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

    return (
        <Box className={style.root}>
            <Box className={style.input}>
                <SearchBar
                    placeholder="Search by Table Name"
                    onKeyUp={handleKeyUp}
                    className={style.inputField}
                />
            </Box>
            <PopUpMolecule
                popup={{
                    open: popupData.isOpen,
                    close: () => {
                        dispatch(closePopup());
                    },
                    tableName: tableData[popupData.tableIndex].tableName,
                    totalPrice: tableData[popupData.tableIndex].totalPrice,
                }}
                popupData={{
                    items: tableData[popupData.tableIndex].items,
                    onServingsChange: onServingsChange,
                    onDelete: onDelete,
                }}
            />
            <Box className={style.list}>
                {tableData.map((element, index) => (
                    <TableComp
                        key={"table-" + index}
                        onDragOver={allowDrop}
                        onDrop={(event) => drop(event, index)}
                        onClick={() => click(index)}
                        data={element}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TablesList;
