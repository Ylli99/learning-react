import React from 'react';
import {AppBar, ThemeProvider, Toolbar, useScrollTrigger} from "@material-ui/core";
import {lightTheme} from "./Theme";

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
    return (
        <ThemeProvider theme={lightTheme}>
        <ElevationScroll>
            <AppBar position='fixed'>
                <Toolbar>My first react app</Toolbar>
            </AppBar>
        </ElevationScroll>
            </ThemeProvider>
    );
}