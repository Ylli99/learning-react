import React from "react";
import {Grid, makeStyles, useMediaQuery, useTheme} from "@material-ui/core";
import {Button, Typography} from "@material-ui/core";
import {lightTheme} from "./Theme";
import ButtonArrow from "./ButtonArrow";
import {Link} from 'react-router-dom';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    h2: {
        ...lightTheme.typography.h2
    },
    sub2: {
        ...lightTheme.typography.subtitle2
    },
    learnButton: {
        ...lightTheme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },
    estimateButton: {
        ...lightTheme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: lightTheme.palette.common.orange,
        fontSize:"1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: lightTheme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0
        }
    }
}))

export default function CallToAction(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container style={{height: "60em"}} alignItems="center" justify={matchesSM ? "center" : "space-between"} className={classes.background} direction={matchesSM ? "column" : "row"}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography className={classes.h2}>Simple Software. <br/> Revolutionary Results.</Typography>
                        <Typography className={classes.sub2} style={{fontSize: "1.5rem"}}>Take advantage of the 21st Century.</Typography>
                        <Grid container justify={matchesSM ? "center" : undefined} item>
                            <Button onClick={() => props.setValue(2)} component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
                                <span style={{marginRight: 5}}>Learn More</span>
                                <ButtonArrow width={10} height={10} fill={lightTheme.palette.common.blue}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} variant="contained" className={classes.estimateButton}>Free Estimate</Button>
            </Grid>
        </Grid>);
}
