import React from "react";
import {Grid, makeStyles, useMediaQuery, useTheme, Typography, Button, TextField} from "@material-ui/core"
import { Link } from "react-router-dom"
import {lightTheme} from "./ui/Theme";
import background from "../assets/background.jpg";

const useStyles = makeStyles(theme => ({
    typo1: {
        ...lightTheme.typography.h4
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em", [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, body1: {
        fontSize: "1.25rem", color: lightTheme.palette.third.main, fontWeight: "300"
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
    },
}))

export default function Contact(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Grid item container direction="row">
             <Grid item container direction="column" lg={3}>
                <Grid item>
                    <Typography className={classes.typo1} style={{lineHeight:1}}>Contact Us</Typography>
                    <Typography className={classes.body1} style={{color: theme.palette.common.blue}}>We're waiting.</Typography>
                </Grid>
             </Grid>
            <Grid item container className={classes.background} lg={9}>

            </Grid>
        </Grid>
    )
}