import React from 'react';
import {AppBar, ThemeProvider, Toolbar, useScrollTrigger} from "@material-ui/core";
import {useTheme,Theme} from "@material-ui/core/styles";
import {lightTheme} from "./Theme";

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             color:theme.palette.common.orange;
//         },
//     }),
// );
function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header(props){
    const theme=useTheme();
    return (
        <ThemeProvider theme={lightTheme}>
        <ElevationScroll>
            <AppBar position='fixed'>
                <Toolbar style={{color:theme.palette.secondary.main}}>My first react app</Toolbar>
            </AppBar>
        </ElevationScroll>
            </ThemeProvider>
    );
}