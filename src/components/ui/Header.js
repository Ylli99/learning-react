import React from 'react';
import {AppBar, ThemeProvider, useScrollTrigger, Toolbar, Tab, Tabs, makeStyles} from "@material-ui/core";
import {lightTheme} from "./Theme";
import logo from '../../assets/logo.svg'

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

const useStyles = makeStyles(theme => {
    return ({
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "3em"
        },
        logo: {
            height: "7em"
        },
        tabContainer: {
            marginLeft: 'auto'
        },
        tab: {
            ...lightTheme.typography.tab,
            minWidth: 10,
            marginLeft: "25px",
        },
    });
})

export default function Header(props){
    const classes = useStyles();

    return (
        <ThemeProvider theme={lightTheme}>
            <ElevationScroll>
                <AppBar position='fixed' color="primary">
                    <Toolbar disableGutters>
                        <img alt= "company logo" src={logo} className={classes.logo}/>
                        <Tabs className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Home"/>
                            <Tab className={classes.tab} label="Services"/>
                            <Tab className={classes.tab} label="The Revolution"/>
                            <Tab className={classes.tab} label="About us"/>
                            <Tab className={classes.tab} label="Contact us"/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </ThemeProvider>
    );
}