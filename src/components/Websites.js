import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg"
import ecommerce from "../assets/ecommerce.svg"
import outreach from '../assets/outreach.svg'
import seo from '../assets/seo.svg'
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
    }, paragraphContainer: {
        maxWidth: "30em"
    }
}))

export default function Websites(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))


    return (<Grid container direction="column">
        <Grid item container direction="row" style={{marginTop: matchesXS ? "1em" : "2em"}}
              justify={matchesMD ? "center" : undefined} className={classes.rowContainer}>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                    <IconButton onClick={() => props.setSelectedIndex(2)} style={{backgroundColor: "transparent"}}
                                component={Link} to="/mobileapps">
                        <img src={backArrow} alt={"Back to Services Page"}/>
                    </IconButton>
                </Grid>
            </Hidden>
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.typo}>Website
                        Development</Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        Having a website is a necessity in today’s business world. They give you one central, public
                        location to let people know who you are, what you do, and why you’re the best at it.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} className={classes.body1} paragraph>
                        From simply having your hours posted to having a full fledged online store, making yourself
                        as accessible as possible to users online drives growth and enables you to reach new
                        customers.
                    </Typography>
                </Grid>
            </Grid>
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer}>
                    <IconButton onClick={() => props.setSelectedIndex(0)} style={{backgroundColor: "transparent"}}
                                component={Link} to="/services">
                        <img src={forwardArrow} alt="Forward to iOS/Android App Development Page"/>
                    </IconButton>
                </Grid>
            </Hidden>
        </Grid>
        <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center"
              className={classes.rowContainer} style={{marginTop: '15em'}}>
            <Grid item>
                <Grid item container direction="column">
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} className={classes.typo1}
                                    gutterBottom>Analytics</Typography>
                    </Grid>
                    <Grid item>
                        <img style={{marginLeft: "-2.75em"}} src={analytics}
                             alt="graph with magnifying glass revealing 1's and 0's"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.paragraphContainer}>
                <Typography align={matchesSM ? "center" : undefined} className={classes.body1}>
                    Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden
                    patterns and trends in your business, empowering you to make smarter decisions with measurable
                    effects.
                </Typography>
            </Grid>
        </Grid>
        <Grid item container direction={matchesSM ? "column" : "row"} justify="flex-end" alignItems="center"
              className={classes.rowContainer} style={{marginTop: "15em", marginBottom: "15em"}}>
            <Grid item>
                <Grid item container direction="column">
                    <Grid item>
                        <Typography align="center" className={classes.typo1} gutterBottom>E-Commerce</Typography>
                    </Grid>
                    <Grid item>
                        <img src={ecommerce} alt="world outline made of dollar signs"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                <Typography align={matchesSM ? "center" : undefined} paragraph className={classes.body1}>
                    It’s no secret that people like to shop online.
                </Typography>
                <Typography align={matchesSM ? "center" : undefined} paragraph className={classes.body1}>
                    In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
                </Typography>
            </Grid>
        </Grid>
        <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center"
              className={classes.rowContainer}>
            <Grid item>
                <Grid item container direction="column">
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} className={classes.typo1}
                                    gutterBottom>Outreach</Typography>
                    </Grid>
                    <Grid item>
                        <img src={outreach}
                             alt="megaphone"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                <Typography align={matchesSM ? "center" : undefined} className={classes.body1}>
                    Draw people in with a dazzling website. Showing off your products online is a great way to help
                    customers decide what’s right for them before visiting in person.
                </Typography>
            </Grid>
        </Grid>
        <Grid item container direction={matchesSM ? "column" : "row"} justify="flex-end" alignItems="center"
              className={classes.rowContainer} style={{marginTop: "15em", marginBottom: "15em"}}>
            <Grid item>
                <Grid item container direction="column">
                    <Grid item>
                        <Typography align="center" className={classes.typo1} gutterBottom>Search
                            Engine <br/> Optimization</Typography>
                    </Grid>
                    <Grid item>
                        <img src={seo} alt="website standing on winner's podium"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                <Typography align={matchesSM ? "center" : undefined} paragraph className={classes.body1}>
                    How often have you ever been to the second page of Google results?
                </Typography>
                <Typography align={matchesSM ? "center" : undefined} paragraph className={classes.body1}>
                    If you’re like us, probably never.
                </Typography>
                <Typography align={matchesSM ? "center" : undefined} paragraph className={classes.body1}>
                    Customers don’t go there either, so we make sure your website is designed to end up on top.
                </Typography>
            </Grid>
        </Grid>
        <Grid item>
            <CallToAction setValue={props.setValue}/>
        </Grid>
    </Grid>)
}