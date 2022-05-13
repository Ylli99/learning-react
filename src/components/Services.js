import React from "react";
import {Link} from 'react-router-dom'
import {Button, Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcons from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrow from "../assets/backArrow.svg";

const useStyles = makeStyles(theme => ({
    typo: {
        ...theme.typography.h2
    },
    typo1: {
        ...theme.typography.h4
    },
    typo2: {
        ...theme.typography.subtitle1
    },
    sub2: {
        ...theme.typography.subtitle2
    },
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2%",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em",
        ...theme.typography.subtitle1
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        bordedRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    revolutionText: {
        ...theme.typography.h3
    }, arrowContainer: {
        marginTop: "0.5em"
    },
    informationBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))


    return (
        <Grid container direction="column">
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography align={matchesSM ? "center" : undefined} className={classes.typo}
                            gutterBottom>Services</Typography>
            </Grid>
            <Grid item container direction="row">
                <Hidden mdDown>
                    <Grid item style={{marginLeft: "4.5em", marginRight: "5em"}}>
                        <Grid item className={classes.arrowContainer}>
                            <IconButton onClick={() => props.setSelectedIndex(3)}
                                        style={{backgroundColor: "transparent"}}
                                        component={Link} to="/websites">
                                <img src={backArrow} alt={"Back to Services Page"}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid item className={classes.arrowContainer}>
                            <IconButton onClick={() => props.setSelectedIndex(1)}
                                        style={{backgroundColor: "transparent"}}
                                        component={Link} to="/customsoftware">
                                <img src={forwardArrow} alt="Forward to Custom Software Development Page"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item> {/*-----iOS/Android Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer}
                      justify={matchesSM ? "center" : "flex-end"} style={{marginTop: matchesSM ? "1em" : "5em"}}>
                    <Grid item
                          style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
                        <Typography className={classes.typo1}>
                            iOS/Android App Development
                        </Typography>
                        <Typography className={classes.subtitle}>
                            Extend Functionallity. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography className={classes.typo2}>
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br/>} with
                            either mobile platform
                        </Typography>
                        <Button onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(2)
                        }} component={Link} to="/mobileapps" variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img alt="mobile apps icon" src={mobileAppsIcons} className={classes.icon} width="250em"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Custom Software Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer}
                      justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography className={classes.typo1}>
                            Custom Software Development
                        </Typography>
                        <Typography className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography className={classes.typo2}>
                            Complete digital solutions, from investigation to <span
                            className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(1)
                        }} component={Link} to="/customsoftware" variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Websites Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer}
                      justify={matchesSM ? "center" : "flex-end"} style={{marginBottom: "10em"}}>
                    <Grid item
                          style={{textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em"}}>
                        <Typography className={classes.typo1}>
                            Website Development
                        </Typography>
                        <Typography className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography className={classes.typo2}>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(3)
                        }} component={Link} to="/websites" variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img alt="website icon" src={websitesIcon} className={classes.icon} width="250em"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}