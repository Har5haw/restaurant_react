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
        fontSize: 16,
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
        },
    },
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
