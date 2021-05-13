import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <React.StrictMode>
        <>
            <Auth0Provider
                domain="harshaw.us.auth0.com"
                clientId="LyazYn2UmP6wocNwYSIDOgHtU7h0wVqj"
                redirectUri={window.location.origin}
            >
                <Provider store={store}>
                    <App />
                </Provider>
            </Auth0Provider>
        </>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
