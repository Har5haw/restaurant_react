import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import baseTheme from "./themes/index";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={baseTheme}>
                <HomePage />
            </ThemeProvider>
        </div>
    );
}

export default App;
