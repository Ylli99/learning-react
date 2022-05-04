import React from "react";
import Lottie from 'react-lottie';
import {makeStyles, Grid, Button, Typography, useTheme, useMediaQuery, Card, CardContent } from "@material-ui/core";
import ButtonArrow from "./ui/ButtonArrow";

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import {lightTheme} from "./ui/Theme";
import mobileAppsIcons from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg'

const useStyles = makeStyles(theme => ({
    typo: {
        ...lightTheme.typography.h2
    },
    typo1: {
        ...lightTheme.typography.h4
    },
    typo2: {
        ...lightTheme.typography.subtitle1
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
        ...lightTheme.typography.estimate,
        backgroundColor: lightTheme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: lightTheme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButton: {
        ...lightTheme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    learnButtonHero: {
        ...lightTheme.typography.learnButton,
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
        color: lightTheme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em",
        ...lightTheme.typography.subtitle1
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
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
        ...lightTheme.typography.h3
    }
}))

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/*-----Hero Block-----*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography className={classes.typo} align="center">Bringing West Coeast Technology<br/>to the Midwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained" >Free Estimate</Button>
                            </Grid>
                            <Grid item >
                                <Button variant="outlined" className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={lightTheme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Custom Software Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography className={classes.typo1}>
                            Custom Software Development
                        </Typography>
                        <Typography className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography className={classes.typo2}>
                            Complete digital solutions, from investigation to <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={lightTheme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----iOS/Android Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                        <Typography className={classes.typo1}>
                            iOS/Android App Development
                        </Typography>
                        <Typography className={classes.subtitle}>
                            Extend Functionallity. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography className={classes.typo2}>
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br/> } with either mobile platform
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={lightTheme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img alt="mobile apps icon" src={mobileAppsIcons} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Websites Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                        <Typography className={classes.typo1}>
                            Website Development
                        </Typography>
                        <Typography className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography className={classes.typo2}>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={lightTheme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt="website icon" src={websitesIcon} className={classes.icon}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container style={{height: "100em", marginTop: "12em"}} alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent style={{textAlign: "center"}}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography className={classes.revolutionText} gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.subtitle}>
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant="outlined" className={classes.learnButtonHero}>
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={lightTheme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}/>
                </Grid>
            </Grid>
        </Grid>
    );
}