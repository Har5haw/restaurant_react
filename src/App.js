import "./App.css";
import HomePage from "./components/pages/HomePage";

const tableListData = require("./data/tables.json");

const itemListData = require("./data/items.json");

function App() {
    return (
        <div className="App">
            <HomePage tableList={tableListData} itemList={itemListData} />
        </div>
    );
}

export default App;
