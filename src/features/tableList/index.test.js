import TableListSlice from "./index";
import { addItemToTable, changeServings, deleteItem } from "./index";

const testData = [
    {
        id: 0,
        tableName: "Reyna",
        totalItems: 1,
        totalPrice: 20,
        items: [
            {
                id: 0,
                itemName: "Dosa",
                itemPrice: 20,
                servings: 1,
            },
        ],
    },
];

describe("Table List Slice", () => {
    it("Initial State", () => {
        expect(TableListSlice(undefined, {})).toEqual(
            require("../../data/tables.json")
        );
    });

    it("Adding item to a table", () => {
        expect(
            TableListSlice(
                testData,
                addItemToTable({
                    index: 0,
                    itemData: {
                        id: 1,
                        itemName: "Biryani",
                        itemPrice: 200,
                    },
                })
            )
        ).toContainEqual({
            id: 0,
            tableName: "Reyna",
            totalItems: 2,
            totalPrice: 220,
            items: [
                {
                    id: 0,
                    itemName: "Dosa",
                    itemPrice: 20,
                    servings: 1,
                },
                {
                    id: 1,
                    itemName: "Biryani",
                    itemPrice: 200,
                    servings: 1,
                },
            ],
        });
    });

    it("Adding Same item to a table Twice", () => {
        expect(
            TableListSlice(
                testData,
                addItemToTable({
                    id: 0,
                    index: 0,
                    itemData: {
                        id: 0,
                        itemName: "Dosa",
                        itemPrice: 20,
                    },
                })
            )
        ).toContainEqual({
            id: 0,
            tableName: "Reyna",
            totalItems: 1,
            totalPrice: 40,
            items: [
                {
                    id: 0,
                    itemName: "Dosa",
                    itemPrice: 20,
                    servings: 2,
                },
            ],
        });
    });

    it("Change Servings", () => {
        expect(
            TableListSlice(
                testData,
                changeServings({
                    servings: 3,
                    itemIndex: 0,
                    tableIndex: 0,
                })
            )
        ).toContainEqual({
            id: 0,
            tableName: "Reyna",
            totalItems: 1,
            totalPrice: 60,
            items: [
                {
                    id: 0,
                    itemName: "Dosa",
                    itemPrice: 20,
                    servings: 3,
                },
            ],
        });
    });

    it("Change Servings less than 1", () => {
        expect(
            TableListSlice(
                testData,
                changeServings({
                    servings: 0,
                    itemIndex: 0,
                    tableIndex: 0,
                })
            )
        ).toContainEqual({
            id: 0,
            tableName: "Reyna",
            totalItems: 0,
            totalPrice: 0,
            items: [],
        });
    });

    it("Delete item", () => {
        expect(
            TableListSlice(
                testData,
                deleteItem({
                    itemIndex: 0,
                    tableIndex: 0,
                })
            )
        ).toContainEqual({
            id: 0,
            tableName: "Reyna",
            totalItems: 0,
            totalPrice: 0,
            items: [],
        });
    });
});
