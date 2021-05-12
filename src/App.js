import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import baseTheme from "./themes/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/profile">
                        <ProfilePage />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
