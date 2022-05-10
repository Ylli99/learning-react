import React from 'react'
import {Grid, IconButton, makeStyles, Typography, Hidden, useMediaQuery, useTheme} from "@material-ui/core";
import Lottie from 'react-lottie';


import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import {lightTheme} from "./ui/Theme";
import {Link} from "react-router-dom";
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import roots from '../assets/root.svg'
import automationAnimation from '../animations/automationAnimation/data.json'
import uxAnimation from '../animations/uxAnimation/data'
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    typo: {
        ...lightTheme.typography.h2
    }, typo1: {
        ...lightTheme.typography.h4
    }, typo2: {
        ...lightTheme.typography.subtitle1
    }, sub2: {
        ...lightTheme.typography.subtitle2
    }, heading: {
        maxWidth: "40em"
    }, arrowContainer: {
        marginTop: "0.5em"
    }, body1: {
        fontSize: "1.25rem", color: lightTheme.palette.third.main, fontWeight: "300"
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, itemContainer: {
        maxWidth: "40em"
    }


}))

export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("sx"))

    const documentsOptions = {
        loop: true, autoplay: false, animationData: documentsAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const scaleOptions = {
        loop: true, autoplay: false, animationData: scaleAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const automationOption = {
        loop: true, autoplay: false, animationData: automationAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const uxOption = {
        loop: true, autoplay: false, animationData: uxAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <Grid container direction="column">
            <Grid item container direction="row" style={{marginTop: matchesXS ? "1em" : "2em"}} justify={matchesMD ? "center" : undefined} className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton onClick={() => props.setSelectedIndex(0)} style={{backgroundColor: "transparent"}}
                                    component={Link} to="/services">
                            <img src={backArrow} alt={"Back to Services Page"}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.typo}>Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            Whether we’re replacing old software or inventing new solutions, Arc Development is here to
                            help your business tackle technology.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            Using regular commercial software leaves you with a lot of stuff you don’t need, without
                            some of the stuff you do need, and ultimately controls the way you work. Without using any
                            software at all you risk falling behind competitors and missing out on huge savings from
                            increased efficiency.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            Our custom solutions are designed from the ground up with your needs, wants, and goals at
                            the core. This collaborative process produces finely tuned software that is much more
                            effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                <Grid item className={classes.arrowContainer}>
                    <IconButton onClick={() => props.setSelectedIndex(2)} style={{backgroundColor: "transparent"}}
                                component={Link} to="/mobileapps">
                        <img src={forwardArrow} alt="Forward to iOS/Android App Development Page"/>
                    </IconButton>
                </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction="row" justify="center" style={{marginTop: "15em", marginBottom: "20em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography className={classes.typo1}>Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt={"lightbulb"}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}}>
                    <Grid item>
                        <Typography className={classes.typo1}>Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt={"stopwatch"}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography className={classes.typo1}>Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt={"cash"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column":"row"} justify={"space-between"} alignItems={matchesMD ? "center" : undefined}  className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{marginBottom: matchesMD ? "15em" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} className={classes.typo1}>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.body1} paragraph align={matchesSM ? "center" : undefined}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography className={classes.body1} paragraph align={matchesSM ? "center" : undefined}>
                                Billions are spent annually on the purchasing, printing, and distribution of paper. On
                                top of the massive environmental impact this has, it causes harm to your bottom line as
                                well.
                            </Typography>
                            <Typography className={classes.body1} paragraph align={matchesSM ? "center" : undefined}>
                                By utilizing digital forms and documents you can remove these obsolete expenses,
                                accelerate your communication, and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} md>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography className={classes.typo1}  align={matchesSM ? "center" : "right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.body1} align={matchesSM ? "center" : "right"} paragraph>
                                Whether you’re a large brand, just getting started, or taking off right now, our application
                                architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" style={{marginTop:"20em", marginBottom:"20em"}}  className={classes.rowContainer}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="tree with roots extending out" height={matchesSM ? "300em" : "450em"} width={matchesSM ? "300em" : "450em"}/>
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography align="center" className={classes.typo1} gutterBottom>Root-Cause Analysis</Typography>
                        <Typography align="center" className={classes.body1} paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography align="center" className={classes.body1} paragraph>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for the
                            most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.rowContainer} item container direction={matchesMD ? "column":"row"} justify={"space-between"} alignItems={matchesMD ? "center" : undefined} justify={"space-between"} style={{marginBottom: "20em"}}>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{marginBottom: matchesMD ? "15em" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} className={classes.typo1}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.body1} paragraph align={matchesSM ? "center" : undefined}>
                                Why waste time when you don’t have to?
                            </Typography>
                            <Typography className={classes.body1} paragraph align={matchesSM ? "center" : undefined}>
                                We can help you identify processes with time or event based actions which can now easily be
                                automated.
                            </Typography>
                            <Typography className={classes.body1} paragraph align={matchesSM ? "center" : undefined}>
                                Increasing efficiency increases profits, leaving you more time to focus on your business,
                                not busywork
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOption} style={{maxHeight: 290, maxWidth: 280}}/>
                    </Grid>
                </Grid>
                <Grid item container direction={matchesSM ? "column" : "row"} className={classes.itemContainer} md>
                    <Grid item md>
                        <Lottie options={uxOption} style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography className={classes.typo1} align={matchesSM ? "center" : "right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.body1} align={matchesSM ? "center" : "right"} paragraph>
                                A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography className={classes.body1} align={matchesSM ? "center" : "right"} paragraph>
                                So why are so many pieces of software complicated, confusing, and frustrating?
                            </Typography>
                            <Typography className={classes.body1} align={matchesSM ? "center" : "right"} paragraph>
                                By prioritizing users and the real ways they interact with technology we’re able to develop
                                unique, personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}