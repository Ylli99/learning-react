import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue= "#9c27b0";
const arcOrange = "#9c27b0"

export const lightTheme= createMuiTheme({
    palette: {
        common : {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    }
});