import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Lottie from "react-lottie";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import integrationAnimation from '../animations/integrationAnimation/data.json'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'
import CallToAction from "./ui/CallToAction";


const useStyles = makeStyles(theme => ({
    typo: {
        ...theme.typography.h2
    }, typo1: {
        ...theme.typography.h4
    }, typo2: {
        ...theme.typography.subtitle1
    }, sub2: {
        ...theme.typography.subtitle2
    }, heading: {
        maxWidth: "40em"
    }, arrowContainer: {
        marginTop: "0.5em"
    }, body1: {
        fontSize: "1.25rem", color: theme.palette.third.main, fontWeight: "300"
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em", [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, itemContainer: {
        maxWidth: "40em"
    }
}))

export default function MobileApps(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Grid container direction="column">
            <Grid item container direction="row" style={{marginTop: matchesXS ? "1em" : "2em"}}
                  justify={matchesMD ? "center" : undefined} className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton onClick={() => props.setSelectedIndex(1)} style={{backgroundColor: "transparent"}}
                                    component={Link} to="/customsoftware">
                            <img src={backArrow} alt={"Back to Custom Software Development Page"}/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.typo}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            Whether you want an app for your customers, employees, or yourself, we can build
                            cross-platform native solutions for any part of your business process. This opens you up to
                            a whole new world of possibilities by taking advantage of phone features like the camera,
                            GPS, push notifications, and more.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton onClick={() => props.setSelectedIndex(3)} style={{backgroundColor: "transparent"}}
                                    component={Link} to="/websites">
                            <img src={forwardArrow} alt="Forward to Website Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer}
                  style={{marginTop: "15em", marginBottom: "15em"}}>
                <Grid item container directiom="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} className={classes.typo1}
                                    gutterBottom>Integrations</Typography>
                        <Typography align={matchesSM ? "center" : undefined} className={classes.body1} paragraph>
                            Our technology enables an innate interconnection between web and mobile applications,
                            putting everything you need right in one convenient place.
                        </Typography>
                        <Typography align={matchesSM ? "center" : undefined} className={classes.body1} paragraph>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger
                            relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth: "20em"}}/>
                </Grid>
                <Grid item container directiom="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} className={classes.typo1} gutterBottom>Simultaneous
                            Platform Support</Typography>
                        <Typography align={matchesSM ? "center" : "right"} className={classes.body1} paragraph>
                            Our cutting-edge development process allows us to create apps for iPhone, Android, and
                            tablets — all at the same time.
                        </Typography>
                        <Typography align={matchesSM ? "center" : "right"} className={classes.body1} paragraph>
                            This significantly reduces costs and creates a more unified brand experience across all
                            devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} style={{marginBottom: "15em"}}
                  className={classes.rowContainer}>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" className={classes.typo1} gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife"/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center"
                      style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}} md>
                    <Grid item>
                        <Typography align="center" className={classes.typo1} gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign" style={{maxWidth: matchesXS ? "20em" : "28em"}}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" className={classes.typo1} gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}
