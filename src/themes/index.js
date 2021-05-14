import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { grey, cyan, orange, blue } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
    container: {
        primary: {
            borderRadius: defaultTheme.spacing(1),
            padding: defaultTheme.spacing(2),
        },
        secondary: {
            borderRadius: defaultTheme.spacing(1),
            padding: defaultTheme.spacing(2),
        },
    },
    overrides: {
        MuiCard: {
            borderRadius: 20,
            background: "red",
        },
    },
    palette: {
        type: "light",
        primary: {
            main: blue[500],
            dark: "#4bacb8",
        },
        secondary: {
            main: orange[500],
        },
        containerPrimary: {
            main: cyan[200],
            light: "#b4ffff",
            dark: "#4bacb8",
        },
        containerSecondary: {
            main: grey[400],
            light: "#f5f5f5",
            dark: "#373737",
        },
    },
    typography: {
        fontFamily: "Itim",
        body1: {
            fontSize: 18,
            "@media(max-width:1460px)": {
                fontSize: 14,
            },
            "@media(max-width:960px)": {
                fontSize: 14,
            },
            "@media(max-width:600px)": {
                fontSize: 14,
            },
            "@media(max-width:430px)": {
                fontSize: 10,
            },
        },
        subtitle2: {
            color: "grey",
            fontSize: 15,
            fontWeight: "lighter",
        },
        caption: {
            color: "grey",
            fontSize: 15,
        },
        h2: {
            fontSize: 22,
            "@media (max-width:600px)": {
                fontSize: 10,
            },
        },
        subtitle1: {
            fontSize: 25,
            "@media (max-width:600px)": {
                fontSize: 10,
            },
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
