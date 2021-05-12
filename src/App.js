import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import baseTheme from "./themes/index";

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
